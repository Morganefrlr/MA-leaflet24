import { useContext } from 'react';
import Context from '../../context/Context';
import styled from 'styled-components';

const ButtonNavbar = ({label, click}) => {

    const {setNavigation, navigation} = useContext(Context)

    return (
        <ButtonNavbarStyled onClick={() => setNavigation(click)} className={navigation === click ? 'isActive' : ''}>
            <p>{label}</p>
        </ButtonNavbarStyled>
    );
};

const ButtonNavbarStyled = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #74c4a4;
    color: #74c4a4;
    cursor: pointer;
    transition: all 200ms ease;

    
    &.isActive{
        background-color:#74c4a4;
        border: none;
        color: #fff;
        font-weight: 600;
    }

`
export default ButtonNavbar;