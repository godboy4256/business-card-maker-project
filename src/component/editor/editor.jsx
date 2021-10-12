import React from 'react';
import CardEditorForm from '../card_editor_form/card_editor_form';
import styles from './editor.module.css'

const Editor = ({cards}) => {
    return (
         <section className={styles.editor}>
            <h1 className={styles.title}>Card Maker</h1>
            {
                cards.map(item => {
                    return <CardEditorForm card={item}/>
                })
            }
         </section>
    )
}

export default Editor;