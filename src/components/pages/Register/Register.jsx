import React from 'react'
import { useForm } from 'react-hook-form'
import styles from './Register.module.css'

const Register = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => alert(JSON.stringify(data))

    return(
        <div className={styles.container}>
            <React.Fragment>
                <h1>Sign up for your information!</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", {required: true})} placeholder="Enter your name" />
                    <input {...register("email", {required: true})} placeholder="Enter your email" />
                    <select {...("gender")}>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <input type="submit" value="Sign Up!" />
                </form>
            </React.Fragment>
        </div>
        
    )
}

export default Register