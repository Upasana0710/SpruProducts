import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';

const Item = styled.div`
  line-height: 66px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  &:hover{
    border-bottom: 4px solid yellow;
  }
`;
const List = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 60%;
  @media (max-width: 1700px) {
    display: none;
  }
`;
const NavContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  height: 70px;
  font-size: 18px;
  color: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1700px) {
    justify-content: flex-end;
    padding-right: 40px;
    box-sizing: border-box;
  }
`;
const Icon = styled.div`
@media (min-width: 1700px) {
    display: none;
  }
`;
const Navbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <NavContainer>
        <List>
            <Item>Home</Item>
            <Item>Our Company</Item>
            <Item>Products</Item>
            <Item>Catalogue</Item>
            <Item>Certificates</Item>
            <Item>Career</Item>
            <Item>Distributor</Item>
            <Item>Gallery</Item>
            <Item>Contact us</Item>
        </List>
        <Icon onClick={() => setMenuOpen(!menuOpen)}>
          <MenuIcon />
        </Icon>
    </NavContainer>
  );
};

export default Navbar;
