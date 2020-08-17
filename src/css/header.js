import { css } from 'glamor'

class HeaderStyle {
    constructor(){
        this.headerclass = css(
            {
                display: 'flex',
                marginTop: '5%',
                marginBottom: '15%',
                '@media(max-width: 991px)': {
                    display: 'block'
                },
            }
        )
        this.divImage = css(
            {
                '@media (max-width: 991px)': {
                    textAlign: 'center',
                }
            }
        )
        this.titleH1 = css(
            {
                textAlign: 'center',
                fontSize: '2.75em',
                color: '#7c7c7c',
                fontFamily: 'Roboto',
                '@media (min-width: 991px)': {
                    textAlign: 'center',
                    width: '100%',
                    fontSize: '3.75em',
                    margin: 'auto'
                }
            }
        )
    }
}


export default HeaderStyle;