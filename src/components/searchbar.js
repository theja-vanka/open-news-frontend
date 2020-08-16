import React, { Component, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class SearchBar extends Component {
    render(){
        return (
            <Fragment>
                <form styles={{width: 100}} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="" fullWidth/>
                </form>
            </Fragment>
        )
    }
}

export default SearchBar;

