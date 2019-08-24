import React from "react";
import styled from "styled-components";
import Dog1 from "../assets/dog1.jpg";
import Dog2 from "../assets/dog2.jpg";
import Dog3 from "../assets/dog3.jpeg";
import {
  FlickingEvent,
  SelectEvent,
  ChangeEvent,
  NeedPanelEvent
} from "@egjs/flicking";
import Flicking from "@egjs/react-flicking";
import { Fade } from "@egjs/flicking-plugins";

const Container = styled.section`
  padding: 2rem;
`;

const Title = styled.header`
  font-size: 2.5rem;
  font-weight: bolder;
  margin-bottom: 1rem;
`;

// const AnimalCardList = styled.div`
//   display: flex;
//   align-items: flex-start;
// `;

const AnimalCard = styled.div<{ imageSrc: string }>`
  background: url(${({ imageSrc }) => imageSrc});
  background-position: center center;
  background-size: auto 100%;
  width: 100%;
  min-height: 25rem;
  height: 100%;
  color: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MapIcon = styled.i`
  position: absolute;
  bottom: -1rem;
  right: 1rem;
  border-radius: 100%;
`;

const TagContainer = styled.div`
  display: flex;
  margin-bottom: 3rem;
`;

const Tag = styled.div<{ bgColor: string; fontColor: string }>`
  border-radius: 2rem;
  background: ${({ bgColor }) => bgColor};
  color: ${({ fontColor }) => fontColor};
  padding: 0.5rem;
  margin-right: 0.5rem;
`;
const UpperSection = styled.div``;
const BottomSection = styled.div`
  padding: 1rem;
  background: rgba(0, 0, 0, 0.4);

  border-radius: 1rem;
`;

const Location = styled.div`
  margin-bottom: 0.5rem;
`;

const LocationIcon = styled.i`
  margin-right: 0.5rem;
`;

const LocationTitle = styled.span`
  font-size: 1rem;
`;

const Time = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;

interface Props {}

interface State {
  name: string;
  place: string;
}

const cards = [
  {
    place: "Pyengcon-dong, Anyang-si, Geonggi-do",
    time: "13:35pm",
    imageSrc: Dog1
  },
  {
    place: "Pyengcon-dong, Anyang-si, Geonggi-do",
    time: "13:35pm",
    imageSrc: Dog2
  },
  {
    place: "Pyengcon-dong, Anyang-si, Geonggi-do",
    time: "13:35pm",
    imageSrc: Dog3
  }
];

class Select extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: "Chales",
      place: "Pyengcon-dong"
    };
  }
  render() {
    const { name, place } = this.state;
    return (
      <Container>
        <Title>
          Select
          <br />
          Your dog
        </Title>
        <TagContainer>
          <Tag
            bgColor="rgba(23, 198, 165,0.15)"
            fontColor="rgba(23, 198, 165,1)"
          >
            {name}
          </Tag>
          <Tag
            bgColor="rgba(112, 158, 252,0.15)"
            fontColor="rgba(112, 158, 252,1)"
          >
            {place}
          </Tag>
        </TagContainer>
        <Flicking
          tag="div"
          onNeedPanel={(e: NeedPanelEvent) => {}}
          onMoveStart={(e: FlickingEvent) => {}}
          onMove={(e: FlickingEvent) => {}}
          onMoveEnd={(e: FlickingEvent) => {}}
          onHoldStart={(e: FlickingEvent) => {}}
          onHoldEnd={(e: FlickingEvent) => {}}
          onRestore={(e: FlickingEvent) => {}}
          onSelect={(e: SelectEvent) => {}}
          onChange={(e: ChangeEvent) => {}}
          classPrefix="eg-flick"
          deceleration={0.0075}
          horizontal={true}
          circular={false}
          infinite={false}
          infiniteThreshold={0}
          lastIndex={Infinity}
          threshold={40}
          duration={100}
          panelEffect={(x: number) => 1 - Math.pow(1 - x, 3)}
          defaultIndex={0}
          inputType={["touch", "mouse"]}
          thresholdAngle={45}
          bounce={10}
          autoResize={false}
          adaptive={false}
          zIndex={2000}
          bound={false}
          overflow={false}
          hanger={"50%"}
          anchor={"50%"}
          gap={50}
          moveType={{ type: "snap", count: 1 }}
          collectStatistics={true}
          plugins={Fade}
        >
          {cards.map((card, index) => (
            <AnimalCard imageSrc={card.imageSrc}>
              <MapIcon />
              <UpperSection />
              <BottomSection>
                <Location>
                  <LocationIcon className="fas fa-location-arrow" />
                  <LocationTitle>{card.place}</LocationTitle>
                </Location>
                <Time>{card.time}</Time>
              </BottomSection>
            </AnimalCard>
          ))}
        </Flicking>
      </Container>
    );
  }
}

export default Select;
