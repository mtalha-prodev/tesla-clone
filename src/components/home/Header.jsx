import { useState } from "react";
import styled from "styled-components";
import { BiMenu } from "react-icons/bi";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <Container>
      <a href="/">
        <img src="/images/logo.svg" alt="" />
      </a>

      <Menu>
        <a>model S</a>
        <a>model 3</a>
        <a>model Y</a>
        <a>model X</a>
      </Menu>
      <RightMenu>
        <a>shop</a>
        <a>tesla account</a>
        <CustomMenu onClick={() => setSidebar(true)} />
      </RightMenu>

      <SideMenu show={sidebar}>
        <CustomClose>
          <CloseMenu onClick={() => setSidebar(false)} />
        </CustomClose>

        <li>
          <a>existing inventory</a>
        </li>
        <li>
          <a>existing inventory</a>
        </li>
        <li>
          <a>existing inventory</a>
        </li>
        <li>
          <a>existing inventory</a>
        </li>
        <li>
          <a>existing inventory</a>
        </li>
        <li>
          <a>existing inventory</a>
        </li>
        <li>
          <a>existing inventory</a>
        </li>
        <li>
          <a>existing inventory</a>
        </li>
      </SideMenu>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 10px;
  z-index: 9;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    padding: 0 10px;
    text-transform: uppercase;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-weight: 600;
    padding: 0 7px;
    text-transform: uppercase;
    font-size: 15px;
    cursor: pointer;
  }
`;

const CustomMenu = styled(BiMenu)`
  cursor: pointer;
  font-size: 26px;
  margin: 0 10px;
`;

const CustomClose = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CloseMenu = styled(GrClose)`
  font-size: 20px;
  cursor: pointer;
`;

const SideMenu = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  z-index: 99;
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 20px;

  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};

  transition: transform 0.2s;
  li {
    list-style: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 15px 0;
    a {
      cursor: pointer;
      font-weight: 600;
      text-transform: capitalize;
    }
  }
`;
