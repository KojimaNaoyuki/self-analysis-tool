import styled from 'styled-components';

const QuestionListBox = styled.div`
    margin-bottom: 1px;
    display: flex;
`
const IdBox = styled.h3`
    padding: 6px 0;
    width: 20%;
    margin: 0;
    background-color: #8DCFFF;
    text-align: center;
    font-size: 18px;
    font-weight: normal;
`;
const Qtext = styled.h3`
    padding: 6px 20px;
    width: 80%;
    margin: 0;
    font-size: 18px;
    font-weight: normal;
    overflow-x: scroll;
    background-color: #daedfd;
`;

const QuestionList = (props) => {
    return(
        <QuestionListBox>
            <IdBox>{props.id}</IdBox>
            <Qtext>{props.Qtext}</Qtext>
        </QuestionListBox>    
    );
}

export default QuestionList;