import React from 'react';
import Login from './component/login/login';
import Maker from './component/maker/maker';
import styles from './app.module.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';


const App = ({authService,FileInput,cardRepository}) => { 
    return (
      <div className={styles.app}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Login authService={authService}/>
              </Route>
              <Route path="/maker">
                <Maker 
                FileInput={FileInput} 
                authService={authService}
                cardRepository={cardRepository}
                />
              </Route>
            </Switch>
          </BrowserRouter>
      </div>
    )

}

export default App;
