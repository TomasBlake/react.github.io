import React from 'react';

const searchBar = (props) => {
    return (
        <div>
            <form>
                <input 
                className='pa3 ba b--green bg-lightest-blue'
                    type='search'
                    placeholder='search robot by name' 
                    name='search'
                    value={props.value}
                    onChange={props.changed}
                    />
            </form>
        </div>
    );
}

export default searchBar;