import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Section = ({ title, description, leftBtn, rightBtn, backgroundImg }) => {
  return (
    <Wrap bgImg={backgroundImg}>
      <Fade bottom>
        <TextItem>
          <h1>{title}</h1>
          <p>{description}</p>
        </TextItem>
      </Fade>
      <Fade bottom>
        <Buttons>
          <ButtonGroup>
            <LeftButton>{leftBtn}</LeftButton>
            {rightBtn && <RightButton>{rightBtn}</RightButton>}
          </ButtonGroup>
          <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
      </Fade>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  padding-top: 15vh;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/model-s.jpg");
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImg}")`};
`;

const TextItem = styled.div`
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 90px;
`;

const Buttons = styled.div``;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 33, 0.8);
  width: 256px;
  height: 40px;
  padding: 0.5rem 2rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  font-size: 12px;
  text-transform: uppercase;
  opacity: 0.85;
  cursor: pointer;
  margin: 0.6rem;
  font-weight: 700;
`;
const RightButton = styled(LeftButton)`
  background-color: rgba(255, 255, 255, 0.8);
  color: black;
`;
const DownArrow = styled.img`
  width: 40px;
  animation: animateDown infinite 1.5s;
`;
