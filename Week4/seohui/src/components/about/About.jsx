// About 세션
import React from "react";
import styled from "styled-components";
import colors from "../../styles/color";
import Profile from "./Profile";
import Information from "./Information";

// About 스타일 컴포넌트
const AboutLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  color: ${colors.mainColor};
  font-weight: 800;
  font-size: 3.64vw;
  padding: 3.12vw 0;
`;

const ProfileList = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.08vw;
  align-items: center;
  margin-bottom: 7.29vw;
`;

const About = () => {
  return (
    <AboutLayout>
      <Title>ABOUT</Title>
      <ProfileList>
        <Profile />
        <Information />
      </ProfileList>
    </AboutLayout>
  );
};

export default About;
