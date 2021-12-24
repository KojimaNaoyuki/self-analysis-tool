import styled from 'styled-components';

const StatusBarBox = styled.div`
    position: relative;
    top: 20px;
    left: 30px;
    width: 70%;
    height: 10px;
    background-color: #FFF;

    z-index: 0;
`;

const StatusBar = (props) => {
    const StatusBarCircle1 = styled.div`
    width: 25px;
    height: 25px;
    background-color: ${props.step1Color};
    border-radius: 50%;

    position: absolute;
    top: 0;
    left: 0;
    transform translate(-50%, -25%);

    z-index: 100;
    `
    const StatusBarBox1 = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 50%;
    height: 10px;
    background-color: ${props.step2Color};
    z-index: 10;
    `;
    const StatusBarCircle2 = styled.div`
    width: 25px;
    height: 25px;
    background-color: ${props.step2Color};
    border-radius: 50%;

    position: absolute;
    top: 0;
    left: 50%;
    transform translate(-50%, -25%);

    z-index: 100;
    `
    const StatusBarBox2 = styled.div`
    position: absolute;
    top: 0px;
    left: 50%;
    width: 50%;
    height: 10px;
    background-color: ${props.step3Color};
    z-index: 10;
    `;
    const StatusBarCircle3 = styled.div`
    width: 25px;
    height: 25px;
    background-color:  ${props.step3Color};
    border-radius: 50%;

    position: absolute;
    top: 0;
    right: 0;
    transform translate(50%, -25%);

    z-index: 100;
`

    return(
        <StatusBarBox>
            <StatusBarCircle1 />
            <StatusBarBox1 />
            <StatusBarCircle2 />
            <StatusBarBox2 />
            <StatusBarCircle3 />
        </StatusBarBox>
    );
}
export default StatusBar;