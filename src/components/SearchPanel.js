import React from 'react';

export default function SearchPanel({ onSearch }) {
    const search = 'Type to search...';
    return (
        <div className="input-group">
            <input className=" form-control search-input"
                onChange={ e => onSearch(e) }
                placeholder={ search }
            />
        </div>
    )
};
