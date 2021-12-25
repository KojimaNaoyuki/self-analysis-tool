import { Component } from "react";
import styled from 'styled-components';

import Header from "../presentational/organisms/Header";
import StatusBar from "../presentational/atoms/StatusBar";
import ConfirmAnswerBox from "../presentational/organisms/ConfirmAnswerBox";
import Btn from "../presentational/atoms/Btn";

const ConfirmAnswerPageBox = styled.div`
    text-align: center;
`;

const StatusBarWrap = styled.div`
    padding: 50px 0;
`;
const Ms = styled.h3`
    padding: 30px 0 45px;
    font-size: 20px;
    font-weight: bold;
    color: #525252;
`
const BtnWrap = styled.div`
    padding: 40px 0 45px;
`

class ConfirmAnswerPage extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <ConfirmAnswerPageBox>
                {/* ヘッダー */}
                <Header />
                {/* ヘッダー */}

                {/* 状態バー */}
                <StatusBarWrap>
                    <StatusBar step1Color="#8DCFFF" step2Color="#8DCFFF" step3Color="#8DCFFF" />
                </StatusBarWrap>
                {/* 状態バー */}

                {/* メッセージ */}
                <Ms>回答を確認してください</Ms>
                {/* メッセージ */}

                {/* 回答確認ボックス */}
                <ConfirmAnswerBox qText="質問内容を表示" aText="回答内容を表示回答内容を表示回答内容を表示回答内容を表示回答内容を表示" />
                <ConfirmAnswerBox qText="質問内容を表示" aText="回答内容を表示回答内容を表示回答内容を表示回答内容を表示回答内容を表示" />
                <ConfirmAnswerBox qText="質問内容を表示" aText="回答内容を表示回答内容を表示回答内容を表示回答内容を表示回答内容を表示" />
                <ConfirmAnswerBox qText="質問内容を表示" aText="回答内容を表示回答内容を表示回答内容を表示回答内容を表示回答内容を表示" />
                <ConfirmAnswerBox qText="質問内容を表示" aText="回答内容を表示回答内容を表示回答内容を表示回答内容を表示回答内容を表示" />
                <ConfirmAnswerBox qText="質問内容を表示" aText="回答内容を表示回答内容を表示回答内容を表示回答内容を表示回答内容を表示" />
                <ConfirmAnswerBox qText="質問内容を表示" aText="回答内容を表示回答内容を表示回答内容を表示回答内容を表示回答内容を表示" />
                <ConfirmAnswerBox qText="質問内容を表示" aText="回答内容を表示回答内容を表示回答内容を表示回答内容を表示回答内容を表示" />
                <ConfirmAnswerBox qText="質問内容を表示" aText="回答内容を表示回答内容を表示回答内容を表示回答内容を表示回答内容を表示" />
                <ConfirmAnswerBox qText="質問内容を表示" aText="回答内容を表示回答内容を表示回答内容を表示回答内容を表示回答内容を表示" />
                <ConfirmAnswerBox qText="質問内容を表示" aText="回答内容を表示回答内容を表示回答内容を表示回答内容を表示回答内容を表示" />
                <ConfirmAnswerBox qText="質問内容を表示" aText="回答内容を表示回答内容を表示回答内容を表示回答内容を表示回答内容を表示" />
                {/* 回答確認ボックス */}

                {/* ボタン */}
                <BtnWrap>
                    <Btn text="PDFとして保存" />
                </BtnWrap>
                {/* ボタン */}
            </ConfirmAnswerPageBox>
        );
    }
}
export default ConfirmAnswerPage;