import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 68px;
  display: flex;
`;

const Logo = styled.img`
  height: 100%;
`;

const NavText = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-left: 0;
  margin-right: 63vw;
`;
const NavTextItem = styled.li`
  color: white;
  margin: 0 10px;
`;

const NavIcon = styled.ul`
  display: flex;
  list-style: none;
  margin-right: 0px;

  height: 100%;
`;

const NavIconItem = styled.ul`
  width: fit-content;
  margin: 0 5px;

  & > img {
    height: 100%;
    width: 20px;
  }
`;

const Banner = (props) => {
  return (
    <Wrapper>
      <Logo src='https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c529.png' />
        <NavText>
          <NavTextItem>홈</NavTextItem>
          <NavTextItem>TV프로그램</NavTextItem>
          <NavTextItem>영화</NavTextItem>
          <NavTextItem>최신 등록 컨텐츠</NavTextItem>
          <NavTextItem>내가 찜한 컨텐츠</NavTextItem>
        </NavText>
        <NavIcon>
          <NavIconItem>
            <img src='/bell.svg' alt='' />
          </NavIconItem>
          <NavIconItem>
            <img src='/gift.svg' alt='' />
          </NavIconItem>
          <NavIconItem>
            <img src='/search.svg' alt='' />
          </NavIconItem>
        </NavIcon>
    </Wrapper>
  );
};

export default Banner;
