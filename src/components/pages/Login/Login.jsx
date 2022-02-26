import React from 'react'
import styles from './Login.module.css'

const Login = () => {

    return(
            <div className={styles.container}>
                <h1>Login page! Enter your information</h1>
                <form onSubmit={ e => e.preventDefault()}>
                    <input placeholder="Enter your name" />
                    <input placeholder="Enter your email" />
                    <input type="submit" value="Sign In!" />
                </form>
            </div>      
    )
}

export default Login
