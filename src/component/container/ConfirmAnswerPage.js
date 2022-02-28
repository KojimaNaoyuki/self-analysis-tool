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
    max-width: 860px;
    margin: 0 auto;
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
    @media screen and (min-width:860px) {
        width: 30%;
    }
`
const BtnAllWrap = styled.div`
    @media screen and (min-width:860px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        flex-direction: row-reverse;
        padding: 40px 0;
    }
`;

const Mtb = styled.div`
    margin: 15px 0;
`;

const MarginHeader = styled.div`
    margin: 60px 0;
`;

class ConfirmAnswerPage extends Component {
    constructor() {
        super();

        this.state = {
            confirmAnswerBox: null
        }
    }

    componentDidMount() {
        let confirmAnswerBoxArr = [];
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

    _drawingCVS() {
        //キャンバスの作成
        const cvs = document.createElement("canvas");
        const width = 595;
        const height = 185*(this.props.answerData.length);

        cvs.setAttribute("width", width);
        cvs.setAttribute("height", height);

        const context = cvs.getContext('2d');
        context.save();

        // -------------------------------------- //

        context.fillStyle = "#FFF";
        context.fillRect(0, 0, width, height);
        context.restore();

        context.fillStyle = '#000';

        // -------------------------------------- //
        //質問 + 回答を描画
        context.font = '16px Arial';
        this.props.answerData.forEach((element, index) => {
            context.font = '16px Arial';
            context.fillText('【' + element.split(/\s+/)[0] + '】', 10, (180*index)+25);
            context.font = '14px Arial';
            context.fillText(element.split(/\s+/)[1], 15, (180*index)+50);
        });

        return cvs;
    }

    downloadImg() {
        //画像をダウンロード
        const cvs = this._drawingCVS();
        const png = cvs.toDataURL("image/png");
        const downloadEle = document.createElement("a");
        downloadEle.href = png;
        downloadEle.download = "自己分析.png";
        downloadEle.click();
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

                <MarginHeader />

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
                <BtnAllWrap>
                    <BtnWrap>
                        <Btn text="画像として保存" clickedFn={this.downloadImg.bind(this)} />
                    </BtnWrap>
                    <BtnWrap>
                        <Btn text="PDFとして保存" />
                    </BtnWrap>
                    <BtnWrap>
                        <Btn text="戻る" clickedFn={this.backBtn.bind(this)} />
                    </BtnWrap>
                </BtnAllWrap>
                {/* ボタン */}
            </ConfirmAnswerPageBox>
        );
    }
}

const mapStateToProps = (state) => {
    return { answerData: state.answerData };
};

export default connect(mapStateToProps)(withRouter(ConfirmAnswerPage));