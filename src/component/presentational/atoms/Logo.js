import styled from 'styled-components';

const LogoBox = styled.div``;
const H1 = styled.h1`
    margin: 0;
    font-size: 22px;
    font-weight: bold;
    color: #747474;
`;
const Span1 = styled.span`
    position: absolute;
    top: 0px;
    left: 90px;
    font-size: 22px;
    font-weight: bold;
    color: #8DCFFF;
    transform: rotate(-25deg);
`;
const Span2 = styled.span`
    position: absolute;
    top: -5px;
    left: 110px;
    font-size: 22px;
    font-weight: bold;
    color: #8DCFFF;
    transform: rotate(-35deg);
`;

const Logo = () => {
    return(
        <LogoBox>
            <H1>自己分析</H1><Span1>く</Span1><Span2>ん</Span2>
        </LogoBox>
    );
}
export default Logo;