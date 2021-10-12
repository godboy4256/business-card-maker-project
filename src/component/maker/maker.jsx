import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Priview from '../priview/priview';
import styles from './maker.module.css'

const Maker = ({authService}) => {
    const [ cards,setCards ] = useState([
        {
            id:1,
            name:'sjw',
            company:'naver',
            theme:'light',
            title:'Software Engineer',
            email:'godboy4256@naver.com',
            message:'Go For It!',
            fileName:'sjw',
            fileURL:null,
        },
        {
            id:2,
            name:'kmb',
            company:'kakao',
            theme:'dark',
            title:'Software Engineer',
            email:'godboy4256@naver.com',
            message:'Go For It!',
            fileName:'sjw',
            fileURL:null,
        },
        {
            id:3,
            name:'kyh',
            company:'samsung',
            theme:'colorful',
            title:'Software Engineer',
            email:'godboy4256@naver.com',
            message:'Go For It!',
            fileName:'sjw',
            fileURL:null,
        }
    ])
    const history = useHistory()
    const onLogOut = () => {
        authService.logout()
    }

    useEffect(()=>{
        authService.onAuthChange(user => {
            if(!user){
                history.push('/');
            }
        })
    })
    const addCard = (card) => {
        const update=[...cards,card]
        setCards(update)
    }   
    return (
    <section className={styles.maker}>
        <Header onLogOut={onLogOut}/>
        <div className={styles.container}>
            <Editor addCard={addCard} cards={cards}/>
            <Priview cards={cards}/>
        </div>
        <Footer />
    </section>
    )
}
            

export default Maker;