import { Component } from "react";
import styled from 'styled-components';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from "react-pdf";

import Header from "../presentational/organisms/Header";
import StatusBar from "../presentational/atoms/StatusBar";
import JobBox from "../presentational/organisms/JobBox";

const SelectJobPageBox = styled.div`
    text-align: center;
    max-width: 860px;
    margin: 0 auto;
`;
const StatusBarWrap = styled.div`
    padding: 50px 0;
`;
const JobBoxWrap = styled.div`
    @media screen and (min-width:860px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
`;
const Ms = styled.h3`
    padding: 30px 0 45px;
    font-size: 20px;
    font-weight: bold;
    color: #525252;
`
const MarginHeader = styled.div`
    margin: 60px 0;
`;

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

                <MarginHeader />

                {/* 状態バー */}
                <StatusBarWrap>
                    <StatusBar step1Color="#8DCFFF" step2Color="#FFF" step3Color="#FFF" />
                </StatusBarWrap>
                {/* 状態バー */}

                {/* メッセージ */}
                <Ms>希望職種をお選びください</Ms>
                {/* メッセージ */}

                {/* 職種ボックス */}
                <JobBoxWrap>
                    <JobBox jobName="総合職" text="一般的な経験や体験から分析する" jobInfo="総合職" />
                    <JobBox jobName="エンジニア" text="一般的な経験や体験から分析する" />
                    <JobBox jobName="エンジニア" text="開発経験やスキルを中心に分析する" />
                </JobBoxWrap>
                {/* 職種ボックス */}
            </SelectJobPageBox>
        );
    }
}
export default SelectJobPage;