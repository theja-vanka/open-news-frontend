import React, { Component, Fragment } from 'react';
import CssTextField from '../css/searchbar';

class SearchBar extends Component {
    render(){
        return (
            <Fragment>
                <form noValidate autoComplete="off">
                    <CssTextField id="standard-basic" placeholder="Search article" inputProps={{ 'aria-label': 'Search article' }} fullWidth/>
                </form>
            </Fragment>
        )
    }
}

export default SearchBar;

