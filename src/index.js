import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';

import SearchBar from './components/searchbar'
import Header from './components/header'
import MyCheckBox from './components/checkbox'

const App = () => {
    return(
    <Fragment>
        <Container maxWidth="md">
            <Header/>
            <SearchBar/>
            <MyCheckBox/>
        </Container>
    </Fragment>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))