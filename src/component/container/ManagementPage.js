import { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from 'styled-components';
import QuestionList from "../presentational/atoms/QuestionList";

import Header from "../presentational/organisms/Header";
import arrowImg from "../../img/arrow.svg";
import Btn from "./../presentational/atoms/Btn";
import Loader from "../presentational/atoms/Loader";

const ManagementPageBox = styled.div`
`;

const InputBox = styled.div`
    background-color: #FFF;
`;

const Flex = styled.div`
    margin-bottom: 1px;
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
const SelectJobInput = styled.select`
    width: 90%;
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
            loaderComponent: null
        }
    }

    _open(element) {
        const tg = document.querySelector('#list-' + element.target.id);

        tg.classList.toggle('open');
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
                            <SelectJobInput>
                                <option>総合職</option>
                                <option>エンジニア(一般)</option>
                                <option>エンジニア(制作物)</option>
                            </SelectJobInput>
                        </Content>
                    </Flex>
                </InputBox>
                {/* 管理対象職種選択 */}

                <MtbL />

                {/* 質問一覧 */}
                <InputBox id="list-1">
                    <HeadingTitle onClick={this._open} id="1"><ArrowImg src={arrowImg} className="arrow" />質問一覧</HeadingTitle>
                    <div className="list">
                        <QuestionList id="0" Qtext="hogehoge" />
                        <QuestionList id="1" Qtext="hogehoge" />
                    </div>
                </InputBox>
                {/* 質問一覧 */}

                <MtbS />

                {/* 質問追加 */}
                <InputBox id="list-2" className="open">
                    <HeadingTitle onClick={this._open} id="2"><ArrowImg src={arrowImg} className="arrow" />質問を追加</HeadingTitle>
                    <div className="list">
                        <Flex>
                            <SubTitle>ID</SubTitle>
                            <Content>質問</Content>
                        </Flex>
                        <Flex>
                            <SubTitle><InputId type="number" /></SubTitle>
                            <Content><InputSt type="text" /></Content>
                        </Flex>

                        <BtnWrap>
                            <Btn text="追加" />
                        </BtnWrap>
                    </div>
                </InputBox>
                {/* 質問追加 */}

                {/* ローダー */}
                {this.state.loaderComponent}
                {/* ローダー */}
            </ManagementPageBox>
        );
    }
}

export default withRouter(ManagementPage);