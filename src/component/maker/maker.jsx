import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Priview from '../priview/priview';
import styles from './maker.module.css'

const Maker = ({authService}) => {
    const [ cards,setCards ] = useState({
        '1':{
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
        '2': {
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
        '3': {
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
    })
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
  
    const createOrUpdateCard = (card) => {
       setCards(cards => {
        const update={...cards}
        update[card.id]=card
        return update
       })
    }   

    const deleteCard = (card) => {
        setCards(cards => {
            const update={...cards}
            delete update[card.id]
            return update
           })
    }    
    
    return (
    <section className={styles.maker}>
        <Header onLogOut={onLogOut}/>
        <div className={styles.container}>
            <Editor 
                addCard={createOrUpdateCard} 
                cards={cards} 
                updateCard={createOrUpdateCard}
                deleteCard={deleteCard}/>
            <Priview cards={cards}/>
        </div>
        <Footer />
    </section>
    )
}
            

export default Maker;