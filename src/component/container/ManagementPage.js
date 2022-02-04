import { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

import Header from "../presentational/organisms/Header";
import arrowImg from "../../img/arrow.svg";
import Btn from "./../presentational/atoms/Btn";
import QuestionList from "../presentational/atoms/QuestionList";
import Loader from "../presentational/atoms/Loader";
import updataImg from "../../img/updata.svg";

const ManagementPageBox = styled.div`
`;

const InputBox = styled.div`
    background-color: #FFF;
`;

const Flex = styled.div`
    display: flex;
`;
const SubTitle = styled.h2`
    padding: 8px 0 8px 15px;
    width: 30%;
    margin: 0;
    font-size: 18px;
    font-weight: normal;
    background-color: #8DCFFF;
`;
const Content = styled.div`
    padding: 8px 0;
    width: 70%;
    text-align: center;
    background-color: #daedfd;
`;
const ContentMax = styled.div`
    padding: 8px 0;
    width: 100%;
    text-align: center;
    background-color: #daedfd;
    margin-bottom: 1px;
`;
const SelectJobInput = styled.select`
    margin: 0 15px;
    width: 200px;
    text-align: center;
    border: none;
    outline: none;
`;
const InputId = styled.input`
    width: 80%;
    border: solid 1px #7e7e7e;
    border-radius: 3px;
    outline: none;
`;
const InputSt = styled.input`
    width: 80%;
    border: solid 1px #7e7e7e;
    border-radius: 3px;
    outline: none;
`;

const HeadingTitle = styled.h3`
    margin: 0;
    position relative;
    padding: 10px 60px;
    font-size: 18px;
`;
const ArrowImg = styled.img`
    position absolute;
    top: 50%;
    left: 20px;
    width: 22px;
    transform: translateY(-50%);
`;
const BtnWrap = styled.div`
    padding: 20px 0;
    text-align: center;
`;

const UpdataImg = styled.img`
    width: 24px;
`;

const MtbL = styled.div`
    margin: 60px 0;
`;
const MtbS = styled.div`
    margin: 5px 0;
`;

class ManagementPage extends Component {
    constructor() {
        super();

        this.state = {
            loaderComponent: null,
            questionList: null
        }
    }

    componentDidMount() {
        this._getQuestionList();
    }

    _open(element) {
        const tg = document.querySelector('#list-' + element.target.id);

        tg.classList.toggle('open');
    }

    _getQuestionList() {
        //質問を取得
        this._loaderOperation(true);

        const selectElement = document.selectJob.selectJobInput;

        const index = selectElement.selectedIndex;
        const jobInfo = selectElement.options[index].value;

        console.log(jobInfo);

        axios
        .get("https://api.kwebk.xyz/api/getQuestion", {
            params: {
                jobName: jobInfo
            }
        })
        .then(response => {
            this._displayQuestionList(response.data.data.questions);

            this._loaderOperation(false);
        })
        .catch(error => {
            console.log(error);
            this._loaderOperation(false);
        });
    }

    _displayQuestionList(data) {
        let tmp = [];
        data.forEach(elemenet => {
            tmp.push(<QuestionList id={elemenet.id} Qtext={elemenet.text} />);
        });
        this.setState({
            questionList: tmp
        });
    }

    _loaderOperation(status) {
        //ローダーの表示設定
        if(status) {
            this.setState({
                loaderComponent: <Loader />
            });
        } else {
            this.setState({
                loaderComponent: null
            });
        }
    }

    addQuestion() {
        //質問を追加する
        const text = document.querySelector('#list2Text').value;

        const selectElement = document.selectJob.selectJobInput;

        const index = selectElement.selectedIndex;
        const jobInfo = selectElement.options[index].value;
        
        axios
        .get("https://api.kwebk.xyz/api/postQuestion", {
            params: {
                jobName: jobInfo,
                text: text
            }
        })
        .then(response => {
            console.log(response);
            alert('質問を追加しました');
        })
        .catch(error => {
            console.log(error);
        });
    }
    updateQuestion() {
        //質問を更新する
        const text = document.querySelector('#list3Text').value;
        const id = document.querySelector('#list3Id').value;

        const selectElement = document.selectJob.selectJobInput;

        const index = selectElement.selectedIndex;
        const jobInfo = selectElement.options[index].value;

        axios
        .get("https://api.kwebk.xyz/api/updateQuestion", {
            params: {
                jobName: jobInfo,
                id: id,
                text: text
            }
        })
        .then(response => {
            console.log(response);
            alert('質問を更新しました');
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        return(
            <ManagementPageBox>
                {/* ヘッダー */}
                <Header />
                {/* ヘッダー */}

                <MtbL />

                {/* 管理対象職種選択 */}
                <InputBox>
                    <Flex>
                        <SubTitle>管理対象</SubTitle>
                        <Content>
                            <Flex>
                                <form name="selectJob">
                                    <SelectJobInput name="selectJobInput">
                                        <option value="総合職">総合職</option>
                                        <option value="エンジニア_一般">エンジニア(一般)</option>
                                        <option value="エンジニア_経験">エンジニア(制作物)</option>
                                    </SelectJobInput>
                                </form>
                                <UpdataImg src={updataImg} onClick={this._getQuestionList.bind(this)} />
                            </Flex>
                        </Content>
                    </Flex>
                </InputBox>
                {/* 管理対象職種選択 */}

                <MtbL />

                {/* 質問一覧 */}
                <InputBox id="list-1">
                    <HeadingTitle onClick={this._open} id="1"><ArrowImg src={arrowImg} className="arrow" />質問一覧</HeadingTitle>
                    <div className="list">
                        {this.state.questionList}
                    </div>
                </InputBox>
                {/* 質問一覧 */}

                <MtbS />

                {/* 質問追加 */}
                <InputBox id="list-2" className="open">
                    <HeadingTitle onClick={this._open} id="2"><ArrowImg src={arrowImg} className="arrow" />質問を追加</HeadingTitle>
                    <div className="list">
                        <ContentMax>質問内容</ContentMax>
                        <ContentMax><InputSt type="text" id="list2Text" /></ContentMax>

                        <BtnWrap>
                            <Btn text="追加" clickedFn={this.addQuestion} />
                        </BtnWrap>
                    </div>
                </InputBox>
                {/* 質問追加 */}

                <MtbS />

                {/* 質問更新 */}
                <InputBox id="list-3">
                    <HeadingTitle onClick={this._open} id="3"><ArrowImg src={arrowImg} className="arrow" />質問を更新</HeadingTitle>
                    <div className="list">
                        <Flex>
                            <SubTitle>ID</SubTitle>
                            <Content>質問内容</Content>
                        </Flex>
                        <Flex>
                            <SubTitle><InputId type="number" id="list3Id" /></SubTitle>
                            <Content><InputSt type="text" id="list3Text"  /></Content>
                        </Flex>

                        <BtnWrap>
                            <Btn text="更新" clickedFn={this.updateQuestion} />
                        </BtnWrap>
                    </div>
                </InputBox>
                {/* 質問更新 */}

                {/* ローダー */}
                {this.state.loaderComponent}
                {/* ローダー */}
            </ManagementPageBox>
        );
    }
}

export default withRouter(ManagementPage);