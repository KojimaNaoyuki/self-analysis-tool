import './App.css';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import TestPage from './component/container/TestPage';
import AnswerPage from './component/container/AnswerPage';

const BaseBox = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #EFEFEF;
`;

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/testpage' element={<TestPage />} />
          <Route exact path='/answerPage' element={<AnswerPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
