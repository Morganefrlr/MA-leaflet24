
import { configNavbar } from './config';
import ButtonNavbar from './ButtonNavbar';
import styled from 'styled-components';

const Navbar = () => {

    return (
        <NavbarStyled>
            {configNavbar.map(item =>
                <ButtonNavbar key={item.label} label={item.label} click={item.click}/>
            )}
        </NavbarStyled>
    );
};

const NavbarStyled = styled.div`
    display: flex;
    width: 100vw;
    height: 80px;
    justify-content: center;
    align-items: center;
    gap: 100px;
`
export default Navbar;