import { Component } from "react";
import styled from "styled-components";

import arrowImg from "../../../img/arrow.svg";

const Box = styled.div`
    position: relative;
`;
const QBox = styled.div`
    position: relative;
    padding: 14px 0px;
    background-color: #FFF;
    border-bottom: solid 3px #EFEFEF;
    text-align: center;
    font-size: 16px;
    transition: all 0.3s;
    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }
`;
const QText = styled.p`
    width: 100%;
    margin: 0;
    padding-left: 40px;
`
const ABox = styled.p`
`;

const Img = styled.img`
`;

class ConfirmAnswerBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ABoxClass: '',
            arrowImgClass: ''
        }
    }

    openABox() {
        if(this.state.ABoxClass == '') {
            this.setState({
                ABoxClass: 'openABox',
                arrowImgClass: 'openArrow-img'
            });
        } else {
            this.setState({
                ABoxClass: '',
                arrowImgClass: ''
            });
        }
    }

    render() {
        return(
            <Box>
                <QBox onClick={this.openABox.bind(this)}><Img src={arrowImg} className={`arrow-img ${this.state.arrowImgClass}`} /><QText>{this.props.qText}</QText></QBox>
                <ABox className={`ABox ${this.state.ABoxClass}`}>{this.props.aText}</ABox>
            </Box>
        );
    }
}
export default ConfirmAnswerBox;