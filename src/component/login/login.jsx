import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css'

const Login = ({authService}) => {  
    const history = useHistory()
    const onLogin = (event) => {
            const goToMaker = (userId) => {
                history.push({
                    pathname:'/maker',
                    state:{ id:userId }
                  })
            }
           authService
           .login(event.currentTarget.textContent)
           .then(data => goToMaker(data.user.uid))
   }
    
        

    useEffect(()=>{
        const goToMaker = (userId) => {
            history.push({
                pathname:'/maker',
                state:{ id:userId }
            })
        }
        authService
        .onAuthChange(user => {
            user && goToMaker(user.id)
            console.log(user)
        })
    },[])

    return (
        <section className={styles.login}>
            <Header />
            <section className={styles.box}>
                <h2 className={styles.title}>login</h2>
                <ul className={styles.list}>
                    <li><button onClick={onLogin}>Google</button></li>
                    <li><button onClick={onLogin}>Github</button></li>
                </ul>
            </section>
            <Footer />
        </section>
    )
}


export default Login;