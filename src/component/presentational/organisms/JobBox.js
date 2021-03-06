import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Btn from '../atoms/Btn';

const JobBoxWrap = styled.div`
    padding: 20px 0;
    background-color: #FFF;
    border-bottom: solid 4px #EFEFEF;
    @media screen and (min-width:860px) {
        width: 45%;
        border-radius: 3px;
        border-bottom: none;
        margin-bottom: 50px;
    }
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

            <Link to={`/answerPage/${props.jobInfo}/0`}><Btn text="次へ" /></Link>
        </JobBoxWrap>
    );
}
export default JobBox;