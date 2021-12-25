import styled from 'styled-components';

import Btn from '../atoms/Btn';

const JobBoxWrap = styled.div`
    padding: 20px 0;
    background-color: #FFF;
    border-bottom: solid 4px #EFEFEF;
`;
const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const JobName = styled.h3`
    display: inline-block;
    text-align: left;
    font-size: 18px;
    padding: 0px 20px;
    margin: 0;
    font-weight: bold;
    color: #525252;
`;
const Line = styled.div`
    display: inline-block;
    width: 55%;
    height: 3px;
    margin: 0px auto;
    background-color: #D7D7D7;
`;
const Ms = styled.h3`
    padding: 40px 0;
    font-size: 16px;
`;

const JobBox = (props) => {
    return(
        <JobBoxWrap>
            <Flex>
                <JobName>{props.jobName}</JobName>
                <Line />
            </Flex>
            <Ms>{props.text}</Ms>

            <Btn text="次へ" />
        </JobBoxWrap>
    );
}
export default JobBox;