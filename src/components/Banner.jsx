import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Wrapper = styled.div`
  width: 100%;
  height: 68px;
  display: flex;
  padding: 20px 58px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 100%;
  margin-right: 30px;
`;

const NavText = styled.ul`
  display: flex;
  color: white;
  list-style: none;
  height: 100%;
  flex: 1;
  align-items: center;
`;

const NavTextItem = styled.li`
  margin-right: 20px;
  color: #e5e5e5;
  &:hover {
    color: #b3b3b3;
  }
  &.select {
    color: white;
    font-weight: bold;
  }
`;

const NavIcon = styled.ul`
  display: flex;
  list-style: none;
  height: 100%;
`;

const NavIconItem = styled.li`
  width: fit-content;
  margin-right: 60px;
  & > img {
    height: 100%;
  }
`;
const Img = styled.img`
  list-style: none;
  height: 100%;
`;
const setFont = event => {
  let asd = document.getElementsByClassName("asd");
  for (let a = 0; a < asd.length; a++) {
    asd[a].style.fontWeight = "normal";
    asd[a].style.color = "#e5e5e5";
  }
  event.target.style.fontWeight = "bold";
  event.target.style.color = "#fff";
};
const Banner = props => {
  return (
    <>
      <Wrapper>
        <Logo src="https://cdn.pixelprivacy.com/wp-content/uploads/2017/12/Netflix-Logo-1024x277.png"></Logo>
        <NavText>
          <NavTextItem className="asd" onClick={setFont}>
            <Link to="/">홈</Link>
          </NavTextItem>
          <NavTextItem className="asd" onClick={setFont}>
            <Link to="/tv">TV 프로그램</Link>
          </NavTextItem>
          <NavTextItem className="asd" onClick={setFont}>
            최신 등록 콘텐츠
          </NavTextItem>
          <NavTextItem className="asd" onClick={setFont}>
            내가 찜한 콘텐츠
          </NavTextItem>
        </NavText>
        <NavIcon>
          <NavIconItem>
            <Img src="/search.svg" alt="" />
          </NavIconItem>
          <NavIconItem>
            <Img src="/gift.svg" alt="" />
          </NavIconItem>
          <NavIconItem>
            <Img src="/bell.svg" alt="" />
          </NavIconItem>
        </NavIcon>
      </Wrapper>
    </>
  );
};
export default Banner;