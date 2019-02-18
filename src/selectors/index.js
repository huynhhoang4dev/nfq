import { createSelector } from 'reselect';
import {
    // filterByType,
    // filterByDate,
    // filterByFavorite,
    sortBy,
    filterBy
} from './../utils';
import _ from 'lodash';

const itemsSelector = (state, props) => state.nasaItems.items

const filterByTypeSelector = (state, props) => state.nasaItems.filterByType;
const filterByDateSelector = (state, props) => state.nasaItems.filterByDate;
// const filterByFavoriteSelector = (state, props) => state.nasaItems.filterByFavorite;

const sortByTitleSelector = (state, props) => state.nasaItems.sortByTitle;
const sortByDateSelector = (state, props) => state.nasaItems.sortByDate;

const activePageSelector = (state, props) => state.nasaItems.activePage;
// const pageCountSelector = (state, props) => state.nasaItems.pageCount;
// const offsetSelector = (state, props) => state.nasaItems.offset;

const onActivedItemsSelector = createSelector(
    itemsSelector,
    // items => items.filter(item => item.data[0].isActive)
    items => items
)

export const getDisplayItems = createSelector(
    [
        onActivedItemsSelector,
        filterByTypeSelector,
        filterByDateSelector,
        sortByTitleSelector,
        sortByDateSelector,
        activePageSelector
    ],
    (
        onActivedItemsSelector, 
        filterByTypeSelector, 
        filterByDateSelector, 
        filterByFavoriteSelector, 
        sortByTitleSelector, 
        sortByDateSelector, 
        activePageSelector) => 
    {
        const ItemsFilteredByType = filterBy(onActivedItemsSelector, item => item.data[0].media_type === filterByTypeSelector);
        const ItemsFilteredByDate = filterBy(ItemsFilteredByType, item => {
            const {startDate, endDate} = filterByDateSelector;
            if(startDate === -1) {
                return item.data[0].date_created <= endDate;
            } else if(endDate === -1) {
                return item.data[0].date_created >= startDate
            } else {
                return item.data[0].date_created >= startDate && item.data[0].date_created <= endDate
            }
        })
        const ItemsFilteredByFavorite = filterBy(ItemsFilteredByDate, item => filterByFavoriteSelector ? item.data[0].isFavorite : item);
        const ItemsSortedByTitle = sortBy(ItemsFilteredByFavorite, ['title'], [sortByTitleSelector]);
        const ItemsSortedByDate = sortBy(ItemsSortedByTitle, ['date_created'], [sortByDateSelector]);

        const result = _.slice(onActivedItemsSelector, 0, 6);
        return result;
    }    
)
