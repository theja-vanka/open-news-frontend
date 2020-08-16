import React, { Component, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class SearchBar extends Component {
    render(){
        return (
            <Fragment>
                <form noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Search article" fullWidth/>
                </form>
            </Fragment>
        )
    }
}

export default SearchBar;

