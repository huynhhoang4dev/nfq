export const ADD_ITEM_TO_COLLECTION = 'ADD_ITEM_TO_COLLECTION';
export const FAVORITE_ITEM_IN_COLLECTION = 'FAVORITE_ITEM_IN_COLLECTION';
export const DELETE_ITEM_IN_COLLECTION = 'DELETE_ITEM_IN_COLLECTION';
export const EDIT_ITEM_IN_COLLECTION = 'EDIT_ITEM_IN_COLLECTION';



export const addItemToCollection = (item) => {
    return {
        type: ADD_ITEM_TO_COLLECTION,
        payload: {...item}
        
    }
}

export const favoriteItemInCollection = (collection_id) => ({
    type: FAVORITE_ITEM_IN_COLLECTION,
    payload: {
        collection_id
    }
})

export const deleteItemInCollection = (collection_id) => ({
    type: DELETE_ITEM_IN_COLLECTION,
    payload: {
        collection_id
    }
})

export const editItemInCollection = (item) => ({
    type: EDIT_ITEM_IN_COLLECTION,
    payload: {
        item
    }
})
