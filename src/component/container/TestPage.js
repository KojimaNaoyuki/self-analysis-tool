import { Component } from "react";
import styled from 'styled-components';

import Logo from './../presentational/atoms/Logo';
import StatusBar from './../presentational/atoms/StatusBar';
import Btn from './../presentational/atoms/Btn';
import ConfirmAnswerBox from './../presentational/organisms/ConfirmAnswerBox';

const BaseBox = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #EFEFEF;
`;
const Mtb = styled.div`
    margin: 50px 0;
`;

class TestPage extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <BaseBox>
                <Logo />
                <Mtb />
                <StatusBar step1Color="#8DCFFF" step2Color="#FFF" step3Color="#FFF" />
                <Mtb />
                <Btn text="次へ" />
                <Mtb />
                <ConfirmAnswerBox qText="質問を表示" aText="hogehoge内容内容内容" />
            </BaseBox>
        );
    }
}
export default TestPage;