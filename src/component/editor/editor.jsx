import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditorForm from '../card_editor_form/card_editor_form';
import styles from './editor.module.css'

const Editor = ({FileInput,cards,addCard,updateCard,deleteCard}) => {
    return (
         <section className={styles.editor}>
            <h1 className={styles.title}>Card Maker</h1>
            {
                Object.keys(cards).map(item => {
                    return <CardEditorForm 
                                key={item} 
                                FileInput={FileInput}
                                card={cards[item]} 
                                updateCard={updateCard}
                                deleteCard={deleteCard}/>
                })
            }
            <CardAddForm FileInput={FileInput} onAdd={addCard}/>
         </section>
    )
}

export default Editor;