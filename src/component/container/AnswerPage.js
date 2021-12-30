import { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import axios from 'axios';

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
    width: 80%;
    margin: 0 auto;
    padding: 30px 0;
    font-size: 18px;
    font-weight: bold;
    color: #525252;
    text-align: left;
    line-height: 24px;
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
            numQuestions: null, //質問全体数
            remainingQuestions: null, //残り質問数
            questionsData: [], //質問データ
            questionDisplay: null
        }
    }

    componentDidMount() {
        const jobInfo = this.props.match.params.jobInfo;

        axios
        .get("http://127.0.0.1:8000/api/getQuestion", {
            params: {
                jobName: jobInfo
            }
        })
        .then(response => {
            this.setState({
                numQuestions: response.data.data.questions.length,
                remainingQuestions: response.data.data.questions.length,
                questionsData: response.data.data.questions
            });
            this.dispalyQuestion(0);
        })
        .catch(error => {
            console.log(error);
        });
    }

    nextBtn() {
        if(this.state.remainingQuestions != 1) {
            //次の質問へ
            this.setState({
                remainingQuestions: this.state.remainingQuestions - 1
            });

            const questionIndex = this.state.numQuestions - (this.state.remainingQuestions-1);
            this.dispalyQuestion(questionIndex);
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

            const questionIndex = this.state.numQuestions - (this.state.remainingQuestions+1);
            this.dispalyQuestion(questionIndex);
        } else {
            //職種選択ページへ
            this.props.history.push("/");
        }
    }
    dispalyQuestion(questionNumber) {
        this.setState({
            questionDisplay: this.state.questionsData[questionNumber].text
        });
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
                <Question>{this.state.questionDisplay}</Question>
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