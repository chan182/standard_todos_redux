import React from "react";
import styled from "styled-components";

const Header = () => {
    return (
        <STyledHeader>
            <p>Header</p>
        </STyledHeader>
    );
};

export default Header;

const STyledHeader = styled.div`
    background-color: yellow;
    padding: 20px;
    font-size: larger;
    font-weight: 700;
    display: flex;
`;
