import './App.css';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import TestPage from './component/container/TestPage';
import AnswerPage from './component/container/AnswerPage';
import ConfirmAnswerPage from './component/container/ConfirmAnswerPage';
import SelectJobPage from './component/container/SelectJobPage';
import ManagementPage from './component/container/ManagementPage';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/testpage'><TestPage /></Route>
          <Route exact path='/'><SelectJobPage /></Route>
          <Route exact path='/answerPage/:jobInfo/:pageIndex'><AnswerPage /></Route>
          <Route exact path='/confirmanswerpage/:jobInfo'><ConfirmAnswerPage /></Route>
          <Route exact path='/managementpage'><ManagementPage /></Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
