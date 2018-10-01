import React, { Component } from "react";
import ReactDOM from "react-dom";

import App from './App'

import $ from 'jquery'; window.$ = $
import io from 'socket.io-client'
import axios from 'axios'; window.axios = axios

let socket = io()
socket.on('welcome', (data) => {
    console.log(data)
})

ReactDOM.render(<App/>, document.getElementById('root'))