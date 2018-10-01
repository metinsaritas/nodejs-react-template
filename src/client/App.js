import React, { Component } from "react"
import './App.css'

export default class App extends Component {
    state = { text: 'Hello'}

    constructor (props) {
        super(props)
    }

    render () {

        return (
            <div>
                { this.state.text } World
            </div>
        )
    }
}