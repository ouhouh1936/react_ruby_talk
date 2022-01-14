import React from "react";
import styled from "styled-components";
import BottomNav from "./BottomNav";
import { Routes, Route } from "react-router-dom";
import Friend from "./Friend";
import Messsage from "./Message";
import Setting from "./Setting";
import Profile from "./Profile";

const ContentWrapper = styled.section`
  width: 100%;
  height: calc(100vh - 60px);

  overflow: scroll;
  // 이 div의 내용보다 넘으면 스크롤 해주는 코드
`;
const NavWrapper = styled.section`
  width: 100%;
  height: 60px;
`;

class App extends React.Component {
  render() {
    return (
      <>
        <ContentWrapper>
          <Routes>
            <Route exact path="/friend" element={<Friend />} />
            <Route exact path="/message" element={<Messsage />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/setting" element={<Setting />} />
          </Routes>
        </ContentWrapper>
        <NavWrapper>
          <BottomNav />
        </NavWrapper>
      </>
    );
  }
}
export default App;
