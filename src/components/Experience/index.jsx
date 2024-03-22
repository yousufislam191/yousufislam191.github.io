import React from "react";
import styled from "styled-components";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { useMediaQuery } from "@mui/material";
import { experiences } from "../../data";
import ExperienceCard from "../Cards/ExperienceCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 80px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  max-width: 800px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 10px;
  @media only screen and (max-width: 767px) {
    margin-left: -50px;
  }
`;

const Image = styled.img`
  height: 50px;
  background-color: #000;
  border-radius: 50px;
  @media only screen and (max-width: 768px) {
    height: 20px;
  }
`;

const Experience = () => {
  const isWideScreen = useMediaQuery("(min-width:768px)");
  return (
    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc>
          My work experience as a software engineer and working on different
          companies and projects.
        </Desc>
        <TimelineSection>
          <Timeline position={isWideScreen ? "alternate" : "default"}>
            {experiences.map((experience, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary">
                    <Image src={experience.img} />
                  </TimelineDot>
                  <TimelineConnector style={{ background: "#854CE6" }} />
                </TimelineSeparator>

                <TimelineContent sx={{ py: "12px", color: "white" }}>
                  <ExperienceCard experience={experience} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Experience;
