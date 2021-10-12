import React from 'react';
import Card from '../card/card';
import styles from './priview.module.css'

const Priview = ({cards}) => {
    return (
         <section className={styles.priview}>
            <h1 className={styles.title}>Card Priview</h1>
            <ul className={styles.cards}>
            {
                cards.map(item => {
                    return <Card card={item}/>
                })
            }
            </ul>
          </section>
    )
}

export default Priview;