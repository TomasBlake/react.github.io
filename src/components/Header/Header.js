import React, {Component} from 'react';
import SearchBar from '../SearchBar';
import './Header.css';

const header = (props) => {
        return(
            <div className='tc' id='Header'>
                <h1 className='H1'>ROBOFRIENDS</h1>
                <SearchBar 
                    changed={props.changed} 
                    value={props.inputText}/>
            </div>
        );
}

export default header;