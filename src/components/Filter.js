import React from 'react';

const Filter = () => {
    return (
        <div>
            Filter By Type : 
            <select>
                <option value="image">All</option>
                <option value="image">Image</option>
                <option value="video">Video</option>

            </select>
            Filter By Date : From To
            Filter By Favorite : <input type="checkbox" />
        </div>
    )
}
export default Filter;