import './App.css';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import TestPage from './component/container/TestPage';

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
        </Routes>
      </BrowserRouter>
  );
}

export default App;
