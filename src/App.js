import './App.css';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import TestPage from './component/container/TestPage';
import AnswerPage from './component/container/AnswerPage';
import ConfirmAnswerPage from './component/container/ConfirmAnswerPage';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/testpage' element={<TestPage />} />
          <Route exact path='/answerPage' element={<AnswerPage />} />
          <Route exact path='/confirmanswerpage' element={<ConfirmAnswerPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
