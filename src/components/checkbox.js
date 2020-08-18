import React, { Component } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import axios from 'axios'

class MyCheckBox extends Component{
    constructor(){
        super()
        this.state = {
            sources: []
        }
    }

    async componentDidMount() {
        let response = await axios.get(
            "https://newsapi.org/v2/sources" , {
                params: {
                    apiKey: '96dccbf1b0054fe782a462fa45613fd2',
                    country: "IN"
                }
            }
        ).then(res => {
            return res
        }).catch(err => console.log(err))
        const sources = response.data.sources
        let checkid = []
        sources.map((source) => {
            checkid[source.id] = false
        })
        checkid['sources'] = sources
        this.setState({...checkid })
    }
    
    render(){
        const handleChange = (event) => {
            this.setState({ ...this.state, [event.target.name]: event.target.checked });
        };
        return(
            <FormGroup row>
                {
                    this.state.sources.map(source => {
                        return(<FormControlLabel
                            control={
                                <Checkbox
                                    checked={this.state[source.id]}
                                    onChange={handleChange}
                                    name={source.id}
                                    color="primary"
                                />
                            }
                            label={source.name}
                        />)
                    })
                }
            </FormGroup>
        )
    }
}

export default MyCheckBox