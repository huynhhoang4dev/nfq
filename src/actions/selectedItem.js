export const SELECT_ITEM = 'SELECT_ITEM';
export const CLEAR_ITEM = 'CLEAR_ITEM';

export const selectItem = (item) =>  ({
    type: SELECT_ITEM,
    payload: {
        item
    }
})

export const clearItem = () => ({
    type: CLEAR_ITEM
})