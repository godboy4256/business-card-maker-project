import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Priview from '../priview/priview';
import styles from './maker.module.css'

const Maker = ({authService,FileInput,cardRepository}) => {
    const history = useHistory()
    const historyState = history?.location?.stata;
    const [ cards,setCards ] = useState({})
    const [userId,setUserId] = useState(historyState && historyState.id)

    const onLogOut = () => {
        authService.logout()
    }
    useEffect(()=>{
        if(!userId){
            return
        }
        const stopSync = cardRepository.syncCard(userId,cards => {
            setCards(cards)
        })
        return () => stopSync()
    },[userId])

    useEffect(()=>{
        authService.onAuthChange(user => {
            if(user){
                setUserId(user.uid)
        }else{
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
       cardRepository.saveCard(userId,card)
    }   

    const deleteCard = (card) => {
        setCards(cards => {
            const update={...cards}
            delete update[card.id]
            return update
           })
        cardRepository.removeCard(userId,card)  
    }    
    
    return (
    <section className={styles.maker}>
        <Header onLogOut={onLogOut}/>
        <div className={styles.container}>
            <Editor 
                FileInput={FileInput}
                addCard={createOrUpdateCard} 
                cards={cards} 
                updateCard={createOrUpdateCard}
                deleteCard={deleteCard}
                />
            <Priview cards={cards}/>
        </div>
        <Footer />
    </section>
    )
}
            

export default Maker;