import React from 'react'
import { Routes, Route } from 'react-router-dom'

import styles from './App.module.css'

import Home from './components/pages/Home'
import Register from './components/pages/Register/Register'
import Login from './components/pages/Login/Login'

export default class App extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <header>
                    <h1>Demo page</h1>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/register'>Register</a></li>
                            <li><a href='/login'>Login</a></li>
                        </ul>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/login' element={<Login />} />
                        </Routes>
                </header>
            </div>
        )
    }
}