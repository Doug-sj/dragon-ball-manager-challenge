import React from 'react'

const Render = (props) => {
    if (props.name) {
        return <h1>Hello, {props.name}!</h1> 
    } else {
        return <span>Hey, Stranger</span>
    }
}

export default Render;