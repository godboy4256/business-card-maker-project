import React, { useRef } from 'react';
import styles from './image_file_input.module.css'

const ImageFileInput = ({imageUpload,name,onFileChange}) => {
    const inputRef = useRef()
    const onButtonClick = (event) => {
        event.preventDefault()
        inputRef.current.click()
    }
    const FileChange = async (event) => {
      //  console.log(event.target.files[0])
       const uploaded = await imageUpload.upload(event.target.files[0]);
       console.log(uploaded)
       onFileChange({
           name:uploaded.original_filename,
           url :uploaded.url
        })
    }
    
    return <div className={styles.container}>
        <input 
        ref={inputRef}
        className={styles.input} 
        type="file" 
        accept="image/*" 
        name="file"
        onChange={FileChange}
        />
        <button className={styles.button} onClick={onButtonClick}>
            {name || "No File"}
        </button>
    </div>
}
            
export default ImageFileInput;