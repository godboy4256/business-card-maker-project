import React from 'react';
import Card from '../card/card';
import styles from './priview.module.css'

const Priview = ({cards}) => {
    return (
         <section className={styles.priview}>
            <h1 className={styles.title}>Card Priview</h1>
            <ul className={styles.cards}>
            {
                Object.keys(cards).map(item => {
                    return <Card key={item} card={cards[item]}/>
                })
            }
            </ul>
          </section>
    )
}

export default Priview;