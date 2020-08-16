import React, { Component, Fragment } from 'react'
import logo from '../assets/logo.png'

import HeaderStyle from '../css/header'

class Header extends Component{
    render() {
        const classes = new HeaderStyle()
        return(
            <Fragment>
                <header>
                    <div {...classes.headerclass}>
                        <div {...classes.divImage}>
                            <img src={logo} alt="Logo"/>
                        </div>
                        <h1 {...classes.titleH1}><span style={{color:'#52c8fa'}}>O</span>pen <span style={{color:'#52c8fa'}}>N</span>ews <span style={{color:'#52c8fa'}}>A</span>nalytics</h1>
                    </div>
                </header>
            </Fragment>
        )
    }
}

export default Header;