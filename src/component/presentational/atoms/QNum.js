import styled from "styled-components";

const QNumBox = styled.div`
    width: 80%;
    margin: 0 auto;
    text-align: right;
`;
const Num = styled.h3`
    font-size: 22px;
`;
const Span = styled.span`
    color: #8DCFFF;
    font-weight: bold;
`;

const QNum = (props) => {
    return(
        <QNumBox>
            <Num>残り <Span>{props.num}問</Span></Num>
        </QNumBox>
    );
}
export default QNum;