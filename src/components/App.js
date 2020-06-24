import React from 'react';
import '../styles/App.css';
import {Switch, Route} from 'react-router-dom';
import LinkList from "./LinkList";
import CreateLink from "./CreateLink";
import Header from './Header'

class App extends React.Component{
    render(){
        return (
            <div className="center w85">
                <Header />
                <div className='ph3 pv1 background-gray'>
                    <Switch>
                        <Route exact path='/' component={LinkList}/>
                        <Route exact path='/create' component = {CreateLink}/>
                    </Switch>
                </div>
            </div>

        )
    }
}

export default App;
