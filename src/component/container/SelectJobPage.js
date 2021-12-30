import { Component } from "react";
import styled from 'styled-components';

import Header from "../presentational/organisms/Header";
import StatusBar from "../presentational/atoms/StatusBar";
import JobBox from "../presentational/organisms/JobBox";

const SelectJobPageBox = styled.div`
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

class SelectJobPage extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <SelectJobPageBox>
                {/* ヘッダー */}
                <Header />
                {/* ヘッダー */}

                {/* 状態バー */}
                <StatusBarWrap>
                    <StatusBar step1Color="#8DCFFF" step2Color="#FFF" step3Color="#FFF" />
                </StatusBarWrap>
                {/* 状態バー */}

                {/* メッセージ */}
                <Ms>希望職種をお選びください</Ms>
                {/* メッセージ */}

                {/* 職種ボックス */}
                <JobBox jobName="総合職" text="一般的な経験や体験から分析する" jobInfo="総合職" />
                <JobBox jobName="エンジニア" text="一般的な経験や体験から分析する" />
                <JobBox jobName="エンジニア" text="開発経験やスキルを中心に分析する" />
                {/* 職種ボックス */}
            </SelectJobPageBox>
        );
    }
}
export default SelectJobPage;