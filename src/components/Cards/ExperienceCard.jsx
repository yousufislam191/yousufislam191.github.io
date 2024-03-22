import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: -10px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Document = styled.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const ExperienceCard = ({ experience }) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        variant="outlined"
        sx={{
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "transparent",
          borderRadius: "10px",
          border: "0.1px solid #306ee8",
          boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontSize: "18px",
              fontWeight: 600,
              color: "#A09EAA",
              "@media only screen and (max-width: 768px)": {
                fontSize: "14px",
              },
            }}
          >
            {experience.role}
          </Typography>

          <Typography
            sx={{
              fontSize: 14,
              color: "#797783",
              "@media only screen and (max-width: 768px)": {
                fontSize: "12px",
              },
            }}
            gutterBottom
          >
            {experience.company}
          </Typography>
          <Typography
            sx={{
              mb: 1.5,
              fontSize: "12px",
              color: "#797783",
              "@media only screen and (max-width: 768px)": {
                fontSize: "10px",
              },
            }}
            gutterBottom
          >
            {experience.date}
          </Typography>

          <Typography
            sx={{
              mb: 1.5,
              fontSize: "15px",
              color: "#A09EAA",
              "@media only screen and (max-width: 768px)": {
                fontSize: "12px",
              },
            }}
          >
            {experience?.desc && <Span>{experience?.desc}</Span>}
            {experience?.skills && (
              <>
                <br />
                <Skills>
                  <b>Skills:</b>
                  <ItemWrapper>
                    {experience?.skills?.map((skill, index) => (
                      <Typography
                        key={index}
                        sx={{
                          color: "#A09EAA",
                          "@media only screen and (max-width: 768px)": {
                            fontSize: "12px",
                            lineHeight: "0.7rem",
                          },
                        }}
                      >
                        {index > 0 && " • "}
                        {skill}
                      </Typography>
                    ))}
                  </ItemWrapper>
                </Skills>
              </>
            )}
          </Typography>
          {experience.doc && (
            <a href={experience.doc} target="new">
              <Document src={experience.doc} />
            </a>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default ExperienceCard;
