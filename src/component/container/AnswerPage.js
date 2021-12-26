import { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

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
    constructor(props) {
        super(props);

        this.state = {
            numQuestions: 10, //質問全体数
            remainingQuestions: 10 //残り質問数
        }
    }

    nextBtn() {
        if(this.state.remainingQuestions != 1) {
            //次の質問へ
            this.setState({
                remainingQuestions: this.state.remainingQuestions - 1
            });
        } else {
            //回答確認ページへ
            if(window.confirm('回答を完了してよろしいですか?')) {
                this.props.history.push("/confirmanswerpage");
            }
        }
    }
    backBtn() {
        if(this.state.remainingQuestions != this.state.numQuestions) {
            //前の質問へ
            this.setState({
                remainingQuestions: this.state.remainingQuestions + 1
            });
        } else {
            //職種選択ページへ
            this.props.history.push("/");
        }
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
                <QNum num={this.state.remainingQuestions} />
                {/* 質問数 */}

                {/* 質問を表示 */}
                <Question>質問を表示</Question>
                {/* 質問を表示 */}

                {/* テキストボックス */}
                <AInputBox placeholder="入力"></AInputBox>
                {/* テキストボックス */}

                {/* ボタン */}
                <BtnWrap>
                    <Btn text="次へ" clickedFn={this.nextBtn.bind(this)} />
                </BtnWrap>
                <BtnWrap>
                    <Btn text="スキップ" clickedFn={this.nextBtn.bind(this)} />
                </BtnWrap>
                <BtnWrap>
                    <Btn text="戻る" clickedFn={this.backBtn.bind(this)} />
                </BtnWrap>
                {/* ボタン */}

            </AnswerPageBox>
        );
    }
}
export default withRouter(AnswerPage);