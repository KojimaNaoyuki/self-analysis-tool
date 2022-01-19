import { Component } from "react";
import styled from 'styled-components';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

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
    padding: 10px 0;
`

const Mtb = styled.div`
    margin: 15px 0;
`;

class ConfirmAnswerPage extends Component {
    constructor() {
        super();

        this.state = {
            confirmAnswerBox: null
        }
    }

    componentDidMount() {
        let confirmAnswerBoxArr = []
        let questionText;
        let answerText;
        this.props.answerData.forEach((element, index) => {
            questionText = element.split(/\s+/)[0];
            answerText = element.split(/\s+/)[1];

            confirmAnswerBoxArr.push(<ConfirmAnswerBox qText={questionText} aText={answerText} sendId={index} backWrite={this.backWrite.bind(this)} />);
        });

        this.setState({
            confirmAnswerBox: confirmAnswerBoxArr
        });
    }

    backBtn() {
        this.props.history.push('/answerPage/' + this.props.match.params.jobInfo + '/' + (this.props.answerData.length-1));
    }

    backWrite(element) {
        this.props.history.push('/answerPage/' + this.props.match.params.jobInfo + '/' + element.target.id);
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
                {this.state.confirmAnswerBox}
                {/* 回答確認ボックス */}

                <Mtb />

                {/* ボタン */}
                <BtnWrap>
                    <Btn text="戻る" clickedFn={this.backBtn.bind(this)} />
                </BtnWrap>
                <BtnWrap>
                    <Btn text="PDFとして保存" />
                </BtnWrap>
                {/* ボタン */}
            </ConfirmAnswerPageBox>
        );
    }
}

const mapStateToProps = (state) => {
    return { answerData: state.answerData };
};

export default connect(mapStateToProps)(withRouter(ConfirmAnswerPage));