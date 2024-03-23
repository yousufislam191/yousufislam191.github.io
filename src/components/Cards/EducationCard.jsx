import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const EducationCard = ({ education }) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        variant="outlined"
        sx={{
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#171721",
          borderRadius: "10px",
          border: "0.1px solid #306ee8",
          height: "100%",
          overflow: "visible",
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
            {education.school}
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
            {education.degree}
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
            {education.date}
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
            {education?.desc && <Span>{education?.desc}</Span>}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EducationCard;
