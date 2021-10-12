import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditorForm from '../card_editor_form/card_editor_form';
import styles from './editor.module.css'

const Editor = ({cards,addCard}) => {
    return (
         <section className={styles.editor}>
            <h1 className={styles.title}>Card Maker</h1>
            {
                cards.map(item => {
                    return <CardEditorForm key={item.id} card={item}/>
                })
            }
            <CardAddForm onAdd={addCard}/>
         </section>
    )
}

export default Editor;