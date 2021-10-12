import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_infut/image_file_input';
import styles from './card_editor_form.module.css'

const CardEditorForm = ({card}) => {
    const {id,name,company,theme,title,email,message,fileName,fileURL} = card
    const onSubmit = () => {

    }
    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" name="name" value={name} onChange/>
            <input className={styles.input} type="text" name="company" value={company} onChange/>
            <select className={styles.select} name="theme" value={theme}>
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="colorful">colorful</option>
            </select>
            <input className={styles.input} type="text" name="title" value={title} onChange/>
            <input className={styles.input} type="text" name="email" value={email} onChange/>
            <textarea className={styles.textarea} name="message" value={message}></textarea>
            <div className={styles.fileInput}>
                <ImageFileInput/>
            </div>
            <Button name="Delete" onClick={onSubmit} />
        </form>
    )
}
            

export default CardEditorForm;