import _ from 'lodash';

export const sortBy = (items = [],key , type = 'asc') =>  _.orderBy(items, [key], [type])
export const filterBy = (items  = [], byCondition) => items.filter(byCondition);
export const filterByType = (items = [], byType) => items.filter(item => item.media_type === byType);
// export const filterByDate = (items = [], startDate, endDate) => items.filter(item => item.date_created === byDate); 
// export const filterByFavorite = (items = [], byFavorite=false) => {
//     if(byFavorite) {
//         return items.filter(item => item.isFavorite);
//     } else {
//         return items;
//     }
// };

//(data, func)

export const compose = (...func) => func.reduce(
    (prevFunc, currentFunc) => currentFunc(prevFunc, )
) 

