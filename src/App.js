import './App.css';
import styled from 'styled-components';

import StatusBar from './component/presentational/atoms/StatusBar';
import Logo from './component/presentational/atoms/Logo';

const BaseBox = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #EFEFEF;
`;

function App() {
  return (
    <BaseBox>
      {/* <StatusBar step1Color="#8DCFFF" step2Color="#FFF" step3Color="#FFF"/> */}
      <Logo />
    </BaseBox>
  );
}

export default App;
