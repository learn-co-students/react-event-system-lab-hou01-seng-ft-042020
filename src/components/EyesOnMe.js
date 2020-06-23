// Code EyesOnMe Component Here
import React, { Component } from 'react'

class EyesOnMe extends React.Component {

    onFocus = () => console.log('Good!')
    onBlur = () => console.log('Hey! Eyes on me!')

    render() {
        return (
            <button id="button"
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            />

        )
    }
}

export default EyesOnMe