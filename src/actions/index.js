import axios from 'axios';
import queryString from 'query-string';

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';
export const DELETE_ITEM = 'DELETE_ITEM';
export const CHANGE_ITEM = 'CHANGE_ITEM';
export const FAVORITE_ITEM = 'FAVORITE_ITEM';
export const FILTER_BY_TYPE = 'FILTER_BY_TYPE';
export const FILTER_BY_DATE = 'FILTER_BY_DATE';
export const FILTER_BY_FAVORITE = 'FILTER_BY_FAVORITE';
export const SORT_BY_TITLE = 'SORT_BY_TITLE';
export const SORT_BY_DATE = 'SORT_BY_DATE';
export const PAGING = 'PAGING';




export const searchNasaItemsRequest = () => ({
    type: SEARCH_REQUEST,
    payload: {
        isFetching: true,
        isSuccess: false,
        isError: false
    }
})

export const searchNasaItemsSuccess = (items) => ({
    type: SEARCH_SUCCESS,
    payload: {
        isFetching: false,
        isSuccess: true,
        isError: false,
        items
    }
})

export const searchNasaItemsFailure = (err) => ({
    type: SEARCH_FAILURE,
    payload: {
        isFetching: false,
        isSuccess: false,
        isError: true,
        errorCode: err
    }
})

export const deleteNasaItem = (nasa_id) => ({
    type: DELETE_ITEM,
    payload: {
        nasa_id
    }
})

export const changeNasaItem = (nasa_id, title, description) => ({
    type: CHANGE_ITEM,
    payload: {
        nasa_id,
        title,
        description
    }
})

export const favoriteNasaItem = (nasa_id) => ({
    type: FAVORITE_ITEM,
    payload: {
        nasa_id
    }
})

export const filterNasaItemsByType = (filterByType) => ({
    type: FILTER_BY_TYPE,
    payload: {
        filterByType
    }
})

export const filterNasaItemsByDate = (filterByDate) => ({
    type: FILTER_BY_DATE,
    payload: {
        filterByDate
    }
})

export const filterNasaItemsByFavorite = (filterByFavorite) => ({
    type: FILTER_BY_FAVORITE,
    payload: {
        filterByFavorite
    }
})

export const sortNasaItemsByTitle = (sortByTitle) => ({
    type: SORT_BY_TITLE,
    payload: {
        sortByTitle
    }
})

export const sortNasaItemsByDate = (sortByDate) => ({
    type: SORT_BY_DATE,
    payload: {
        sortByDate
    }
})

export const paging = (activePage) => ({
    type: PAGING,
    payload: {
        activePage
    }
})

export const fetchNasaItems = (search) => (
    (dispatch, getState) => {
        const { query, page = 0 } = queryString.parse(search);
        const {isSuccess} = getState().nasaItems;
        if(isSuccess === false && query && query !== '') {
            dispatch(searchNasaItemsRequest());
            axios.get(`https://images-api.nasa.gov/search?q=${query}`)
            .then( ({data = {}} ) => data )
            .then( ({collection = {}}) => collection )
            .then( ({items = []}) => items )
            .then( (items = []) => items.map(({href, data}) => ({href, data})) )
            
            .then( (items = []) => {
                return Promise.all(
                    items.map( ({href, data = []}) => {   
                        return Promise.all([
                            new Promise((resolve, reject) => {
                                const dataChanged =  data.map(
                                    ({
                                        nasa_id, 
                                        media_type, 
                                        title, 
                                        description, 
                                        date_created, 
                                        secondary_creator 
                                    }) => ({
                                        nasa_id, 
                                        media_type, 
                                        title, 
                                        description,    
                                        date_created, 
                                        secondary_creator
                                    })
                                )
                                resolve(dataChanged);
                            }), 
                            axios.get(href)
                            .then( ({data}) => data )
                            .catch(err => {})
                        ])
                        .then(values => ({data: values[0], collection: values[1]}))
                        .then(({data, collection=[]}) => {
                            const thumbs = collection.filter(item => /thumb/.test(item));
                            const previews = collection.filter(item => /preview/.test(item));
                            return {data, collection, thumbs, previews}
                        })
                    } ) 
                )
                .then(values => {
                    dispatch(searchNasaItemsSuccess(values));
                })
            })
            .catch(err => {
                dispatch(searchNasaItemsFailure()
            )})       
        }   
    }
)

// export const displayPage = activePage => (
//     (dispatch, getState) => {
//         const pageOffSet = getState().nasaItems.offset;
//         const pageCount = getState().nasaItems.pageCount;

//     }
// )


// export const filterByType = () => {}
// export const filterByDate = () => {}
// export const filterFavorite = () => {}
// export const sortByDate = () => {}
// export const sortByTitle = () => {}