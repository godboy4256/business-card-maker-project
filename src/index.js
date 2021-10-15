import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_upload';
import CardRepository from './service/card_repository';
import ImageFileInput from './component/image_file_infut/image_file_input';

const authService = new AuthService()
const ImageUpload = new ImageUploader()
const cardRepository = new CardRepository()

const FileInput = props => (
  <ImageFileInput {...props} 
  imageUpload={ImageUpload}/>
)

ReactDOM.render(
  <React.StrictMode>
    <App 
    authService={authService} 
    FileInput={FileInput}
    cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

