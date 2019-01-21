import React, { Component } from 'react';
import NavBar from './NavBar';
import Questions from './Questions/Questions';
import {Route} from 'react-router-dom';
import Question from './Question/Question';
import Callback from './Callback';
import SecuredRoute from './SecuredRoute/SecuredRoute';
import NewQuestion from './NewQuestion/NewQuestion';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Route exact path='/' component={Questions} />
        <Route exact path='/question/:questionId' component={Question} />
        <Route exact path='/callback' component={Callback}></Route>
        <SecuredRoute path='/new-question' component={NewQuestion}/>
      </div>
    );
  }
}

export default App;
