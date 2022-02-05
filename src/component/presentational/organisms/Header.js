import styled from "styled-components";

import Logo from "./../atoms/Logo";

const HeaderBox = styled.div`
    padding: 10px;
    text-align: left;
    position: absolute;
    top: 0;
    left: 0;
`;

const Header = () => {
    return(
        <HeaderBox>
            <Logo />
        </HeaderBox>
    );
}
export default Header;