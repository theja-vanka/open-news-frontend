import React, { Component, Fragment } from 'react';
import CssTextField from '../css/searchbar';

class SearchBar extends Component {
    render(){
        let handleTransition = (e) => {
            console.log('Clicked')
            console.log(e)
        }
        return (
            <Fragment>
                <form noValidate autoComplete="off">
                    <CssTextField 
                        id="standard-basic" 
                        placeholder="Search article" 
                        inputProps={{ 'aria-label': 'Search article' }} 
                        fullWidth
                        onClick={handleTransition}
                    />
                </form>
            </Fragment>
        )
    }
}

export default SearchBar;

