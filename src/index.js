import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';

import SearchBar from './components/searchbar'
import Header from './components/header'

const App = () => {
    return(
    <Fragment>
        <Container maxWidth="md">
            <Header/>
            <SearchBar/>
        </Container>
    </Fragment>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))