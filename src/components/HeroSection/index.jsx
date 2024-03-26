import { Bio } from "../../data";
import HeroImg from "../../assets/images/HeroImage.jpg";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Hi,
  Title,
  Span,
  SubTitle,
  ResumeButton,
} from "./HeroStyle";
import Typewriter from "typewriter-effect";
import HeroBgAnimation from "../HeroBgAnimation";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Hi>Hi, I am</Hi> <br />
            <Title>{Bio.name}</Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="display">
              Download Resume
            </ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src={HeroImg} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
