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
    max-width: 860px;
    margin: 0 auto;
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
        //???????????????
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
        //???????????????????????????
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
        //?????????????????????
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
            alert('???????????????????????????');
        })
        .catch(error => {
            console.log(error);
        });
    }
    updateQuestion() {
        //?????????????????????
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
            alert('???????????????????????????');
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        return(
            <ManagementPageBox>
                {/* ???????????? */}
                <Header />
                {/* ???????????? */}

                <MtbL />

                {/* ???????????????????????? */}
                <InputBox>
                    <Flex>
                        <SubTitle>????????????</SubTitle>
                        <Content>
                            <Flex>
                                <form name="selectJob">
                                    <SelectJobInput name="selectJobInput">
                                        <option value="?????????">?????????</option>
                                        <option value="???????????????_??????">???????????????(??????)</option>
                                        <option value="???????????????_??????">???????????????(?????????)</option>
                                    </SelectJobInput>
                                </form>
                                <UpdataImg src={updataImg} onClick={this._getQuestionList.bind(this)} />
                            </Flex>
                        </Content>
                    </Flex>
                </InputBox>
                {/* ???????????????????????? */}

                <MtbL />

                {/* ???????????? */}
                <InputBox id="list-1">
                    <HeadingTitle onClick={this._open} id="1"><ArrowImg src={arrowImg} className="arrow" />????????????</HeadingTitle>
                    <div className="list">
                        {this.state.questionList}
                    </div>
                </InputBox>
                {/* ???????????? */}

                <MtbS />

                {/* ???????????? */}
                <InputBox id="list-2" className="open">
                    <HeadingTitle onClick={this._open} id="2"><ArrowImg src={arrowImg} className="arrow" />???????????????</HeadingTitle>
                    <div className="list">
                        <ContentMax>????????????</ContentMax>
                        <ContentMax><InputSt type="text" id="list2Text" /></ContentMax>

                        <BtnWrap>
                            <Btn text="??????" clickedFn={this.addQuestion} />
                        </BtnWrap>
                    </div>
                </InputBox>
                {/* ???????????? */}

                <MtbS />

                {/* ???????????? */}
                <InputBox id="list-3">
                    <HeadingTitle onClick={this._open} id="3"><ArrowImg src={arrowImg} className="arrow" />???????????????</HeadingTitle>
                    <div className="list">
                        <Flex>
                            <SubTitle>ID</SubTitle>
                            <Content>????????????</Content>
                        </Flex>
                        <Flex>
                            <SubTitle><InputId type="number" id="list3Id" /></SubTitle>
                            <Content><InputSt type="text" id="list3Text"  /></Content>
                        </Flex>

                        <BtnWrap>
                            <Btn text="??????" clickedFn={this.updateQuestion} />
                        </BtnWrap>
                    </div>
                </InputBox>
                {/* ???????????? */}

                {/* ???????????? */}
                {this.state.loaderComponent}
                {/* ???????????? */}
            </ManagementPageBox>
        );
    }
}

export default withRouter(ManagementPage);