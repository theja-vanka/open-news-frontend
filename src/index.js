import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import SearchBar from './components/searchbar'

const App = () => {
    return(
    <React.Fragment>
        <Container maxWidth="sm">
            <SearchBar/>
        </Container>
    </React.Fragment>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))