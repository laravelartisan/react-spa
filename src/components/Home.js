import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import '../styles/homeStyle.css'

const Text = () => {
    return(
        'Text'
    )
}

const Home = () =>{
    return(
        <CSSTransitionGroup
            transitionName="homeTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
            <div>
                <Text/>
            </div>
        </CSSTransitionGroup>
    )
}

export default Home