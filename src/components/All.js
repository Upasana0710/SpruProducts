import styled from "styled-components";

const Item = styled.div`
  line-height: 27px;
  text-transform: uppercase;
  font-weight: 500;
`;
const List = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 60%;
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
`;
const All = () => {
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
    </NavContainer>
  );
};

export default All;
