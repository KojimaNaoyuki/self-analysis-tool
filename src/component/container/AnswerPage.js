import { Component } from "react";
import styled from "styled-components";

import Header from "../presentational/organisms/Header";
import StatusBar from "../presentational/atoms/StatusBar";
import QNum from "../presentational/atoms/QNum";
import Btn from "./../presentational/atoms/Btn";

const AnswerPageBox = styled.div`
    text-align: center;
`;

const StatusBarWrap = styled.div`
    padding: 50px 0;
`;

const Question = styled.h3`
    padding: 30px 0 45px;
    font-size: 20px;
    font-weight: bold;
    color: #525252;
`;

const AInputBox = styled.textarea`
    margin-bottom: 35px;
    width: 80%;
    height: 200px;
    border: solid 1px #CCC;
    border-radius: 3px;
    resize: none;
    outline: none;
    font-size: 16px;
`;

const BtnWrap = styled.div`
    padding: 10px 0;
`;

class AnswerPage extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <AnswerPageBox>
                {/* ヘッダー */}
                <Header />
                {/* ヘッダー */}

                {/* 状態バー */}
                <StatusBarWrap>
                    <StatusBar step1Color="#8DCFFF" step2Color="#8DCFFF" step3Color="#FFF" />
                </StatusBarWrap>
                {/* 状態バー */}

                {/* 質問数 */}
                <QNum num="10" />
                {/* 質問数 */}

                {/* 質問を表示 */}
                <Question>質問を表示</Question>
                {/* 質問を表示 */}

                {/* テキストボックス */}
                <AInputBox placeholder="入力"></AInputBox>
                {/* テキストボックス */}

                {/* ボタン */}
                <BtnWrap>
                    <Btn text="次へ" />
                </BtnWrap>
                <BtnWrap>
                    <Btn text="スキップ" />
                </BtnWrap>
                <BtnWrap>
                    <Btn text="戻る" />
                </BtnWrap>
                {/* ボタン */}

            </AnswerPageBox>
        );
    }
}
export default AnswerPage;