import { combineReducers } from 'redux';

import { 
    SEARCH_REQUEST, 
    SEARCH_SUCCESS, 
    SEARCH_FAILURE,
    DELETE_ITEM,
    CHANGE_ITEM,
    FAVORITE_ITEM,
    FILTER_BY_TYPE,
    FILTER_BY_DATE,
    FILTER_BY_FAVORITE,
    SORT_BY_TITLE,
    SORT_BY_DATE,
    PAGING
} from './../actions';

import {
    ADD_ITEM_TO_COLLECTION,
    FAVORITE_ITEM_IN_COLLECTION,
    EDIT_ITEM_IN_COLLECTION,
    DELETE_ITEM_IN_COLLECTION
} from './../actions/collection';

import { SELECT_ITEM, CLEAR_ITEM } from './../actions/selectedItem';

/** 
 *  item {
 *      nasa_id: '',
 *      isActive: true,
 *      isFavorite: false
 *      title: ''
 *      media_type: '',
 *      date_created: '',
 *      secondary_creator: ''
 *      description: ''
 * }
 * 
*/

const initialNasaItemsState = {
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorCode: '',
    items: [],
    items_count: 0,
    pageCount: 0,
    offset: 6,
    activePage: 0,
    filterByType: '',
    filterByDate: {
        startDate: -1,
        endDate: -1
    },
    filterByFavorite: false,
    sortByTitle: '',
    sortByDate: ''
}


const nasaItems = (state = initialNasaItemsState, action) => {
    switch(action.type) {
        case SEARCH_REQUEST:
            return {
                ...state,
                isFetching: action.payload.isFetching,
                isSuccess: action.payload.isSuccess
            }
        case SEARCH_SUCCESS: {
            const { offset } = state;
            const items_count = action.payload.items.length;
            return {
                ...state,
                isFetching: action.payload.isFetching,
                isSuccess: action.payload.isSuccess,
                items: action.payload.items,
                items_count
            }
        }
            
        case SEARCH_FAILURE:
            return {
                ...state,
                isFetching: action.payload.isFetching,
                isSuccess: action.payload.isSuccess
            }
        case DELETE_ITEM:
            
            return {
                ...state,
                items: state.items.map(item => item.nasa_id === action.payload.nasa_id ? { ...item, isActive: false} : item)
            }
        case CHANGE_ITEM:

            return {
                ...state,
                items: state.items.map(
                    item => item.nasa_id === action.payload.nasa_id 
                    ? { ...item, title: action.payload.title, description: action.payload.description } 
                    : item
                )
            }
        case FAVORITE_ITEM:
            return {
                ...state,
                items: state.items.map(item => item.nasa_id === action.payload.nasa_id ? { ...item, isFavorite: !item.isFavorite } : item)
            }
        case FILTER_BY_TYPE:
            return {
                ...state,
                filterByType: action.payload.filterByType
            }
        case FILTER_BY_DATE:
            return {
                ...state,
                filterByDate: action.payload.filterByDate
            }
        case FILTER_BY_FAVORITE:
            return {
                ...state,
                filterByFavorite: action.payload.filterByFavorite
            }
        case SORT_BY_TITLE:
            return {
                ...state,
                sortByTitle: action.payload.sortByTitle
            }
        case SORT_BY_DATE:
            return {
                ...state,
                sortByDate: action.payload.sortByDate
            }
        case PAGING:
            return {
                ...state,
                activePage: action.payload.activePage
            }
        default:
            return state;
    }
}

const initialCollectionState = {
    items: [],
    isError: false,
    errCode: ''
}

const collection = (state = initialCollectionState, action) => {
    switch(action.type) {
        case ADD_ITEM_TO_COLLECTION: {
            return state.items.find( item => {
                const {nasa_id} = item.data[0];
                return nasa_id === action.payload.data[0].nasa_id
            }) 
                ? { ...state, isError: true, errCode: 'This items was existed in collection', items: [...state.items] }
                : { ...state, isError: false, errCode: '', items: [...state.items, action.payload] }
            
            // return {
            //     ...state,
            //     items: [
            //         ...state.items,
            //         action.payload
            //     ]
            // }
        }       
        case FAVORITE_ITEM_IN_COLLECTION: 
            return {
                ...state,
                items: state.items.map(item => item.nasa_id === action.payload.collection_id ? { ...item, isFavorite: true } : item)
            }
        case EDIT_ITEM_IN_COLLECTION: {
            const {
                nasa_id,
                title,
                description,
                media_type,
                collection
            } = action.payload.item
            return {
                ...state,
                items: state.items.map(
                    item => item.nasa_id === nasa_id
                    ? {...item, title, description, media_type, collection}
                    : item
                )
            }
        }            
        case DELETE_ITEM_IN_COLLECTION:     
            return {
                ...state,
                items: state.items.filter(item => item.nasa_id !== action.payload.collection_id)
            }
        default:
            return state;
    }
}

const selectedItem = (state = {}, action) => {
    switch(action.type) {
        case SELECT_ITEM: 
            return {
                ...state,
                item: action.payload.item
            }
        case CLEAR_ITEM:
            return {
                item: {}
            }
        default: 
            return state;
    }
}

export default combineReducers({
    nasaItems,
    collection,
    selectedItem
})