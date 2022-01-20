import { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from 'styled-components';
import QuestionList from "../presentational/atoms/QuestionList";

import Header from "../presentational/organisms/Header";
import arrowImg from "../../img/arrow.svg";

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
    width: 40%;
    margin: 0;
    font-size: 20px;
    background-color: #8DCFFF;
`;
const Content = styled.div`
    padding: 8px 0;
    width: 60%;
    text-align: center;
`;
const SelectJobInput = styled.select`
    width: 90%;
    text-align: center;
    border: none;
    outline: none;
`;
const Input = styled.input`
    border: solid 1px #7e7e7e;
    border-radius: 3px;
    outline: none;
`;

const HeadingTitle = styled.h3`
    margin: 0;
    position relative;
    padding: 10px 60px;
    font-size: 20px;
`;
const ArrowImg = styled.img`
    position absolute;
    top: 50%;
    left: 20px;
    width: 22px;
    transform: translateY(-50%);
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
                <InputBox>
                    <HeadingTitle><ArrowImg src={arrowImg} />質問一覧</HeadingTitle>
                    <QuestionList id="0" Qtext="hogehoge" />
                    <QuestionList id="1" Qtext="hogehoge" />
                </InputBox>
                {/* 質問一覧 */}

                <MtbS />

                {/* 質問追加 */}
                <InputBox>
                    <HeadingTitle><ArrowImg src={arrowImg} />質問を追加</HeadingTitle>
                </InputBox>
                {/* 質問追加 */}

            </ManagementPageBox>
        );
    }
}

export default withRouter(ManagementPage);