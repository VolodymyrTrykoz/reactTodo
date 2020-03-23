import React from 'react';
import cx from 'classnames'


export default function ItemStatusFilter({ onSelectSortedGroup, filteredGroup }) {
    const buttons = [
            {label: 'All', key: 'all'},
            {label: 'Active', key: 'active'},
            {label: 'Done', key: 'done'},
        ];
    return (
        <div className="btn-group">
            { buttons.map( item => {
                const { label, key } = item;
                return (
                    <button className={ cx({
                        'btn': true,
                        'btn-outline-secondary': filteredGroup !== key,
                        'btn-info': filteredGroup === key
                    })}
                            key = { key }
                            onClick={ () => onSelectSortedGroup(`${key}`) }
                    >
                        { label }
                    </button>
                )})
            }
        </div>
    )
};
