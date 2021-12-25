import styled from "styled-components";

import Logo from "./../atoms/Logo";

const HeaderBox = styled.div`
    padding: 10px;
    text-align: left;
`;

const Header = () => {
    return(
        <HeaderBox>
            <Logo />
        </HeaderBox>
    );
}
export default Header;