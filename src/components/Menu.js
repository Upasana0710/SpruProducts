import styled from "styled-components";

const Item = styled.div`
  line-height: 27px;
  text-transform: uppercase;
  font-weight: 500;
  padding: 10px 20px;
  cursor: pointer;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const MenuContainer = styled.div`
  position: fixed;
  height: 100vh;
  z-index: 999;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 300px;
  left: 0;
  transition: 0.3s ease-in-out;
  @media (min-width: 1700px) {
    display: none;
  }
`;

const Menu = ({menuOpen}) => {
  return (
    <MenuContainer>
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
    </MenuContainer>
  )
};

export default Menu;
