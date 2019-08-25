import React from "react";
import styled from "styled-components";
import Dog4 from "../assets/dog4.jpg";
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
import { RouteComponentProps } from "react-router";

const Container = styled.section`
  padding: 2rem;
`;

const Title = styled.header`
  font-size: 2.5rem;
  font-weight: bolder;
  margin-bottom: 1.5rem;
`;

const AnimalCard = styled.div<{ imageSrc: string }>`
  background: url(${({ imageSrc }) => imageSrc});
  background-position: center center;
  background-size: auto 100%;
  width: 18rem;
  min-height: 25rem;
  height: 100%;
  color: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 20px 2px rgba(110, 110, 110, 0.5);
`;

const MapButton = styled.div`
  position: absolute;
  bottom: 0px;
  transform: translateY(50%);
  right: 1rem;
  z-index: 2;
  background: #00d1a9;
  border-radius: 100%;
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 0 17px 0px rgba(0, 0, 0, 0.5);
`;

const MapIcon = styled.i`
  color: white;
  font-size: 2rem;
`;

const TagContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const Tag = styled.div<{ bgColor: string; fontColor: string }>`
  border-radius: 2rem;
  background: ${({ bgColor }) => bgColor};
  color: ${({ fontColor }) => fontColor};
  padding: 0.5rem 0.7rem;
  font-size: 1rem;
  margin-right: 0.5rem;
`;
const UpperSection = styled.div``;
const BottomSection = styled.div`
  padding: 1rem;
  padding-bottom: 2rem;
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
  font-size: 0.8rem;
`;

const Time = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;

const StartButton = styled.div`
  width: 10rem;
  min-height: 25rem;
  height: 100%;
  background: white;
  border-radius: 1rem;
  padding: 3rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 0 17px 0px rgba(187, 187, 187, 0.5);
  cursor: pointer;
`;

const StartTitle = styled.div`
  font-size: 1.5rem;
  line-height: 1.2;
  color: rgba(23, 198, 165, 1);
`;

const ArrowIcon = styled.div`
  font-size: 3rem;
  color: rgba(23, 198, 165, 1);
`;

interface Props extends RouteComponentProps {}

interface State {
  name: string;
  place: string;
  time: string;
  selected: number[];
}

const cards = [
  {
    place: "Pyengcon-dong, Anyang-si, Geonggi-do",
    time: "13:35pm",
    imageSrc: Dog4
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
      place: "Pyengcon-dong",
      time: "13:35pm",
      selected: []
    };
  }
  render() {
    const { name, place, time } = this.state;
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
          <Tag
            bgColor="rgba(252, 192, 112, 0.15)"
            fontColor="rgba(252, 192, 112, 1)"
          >
            {time}
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
          autoResize={true}
          adaptive={false}
          bound={false}
          overflow={true}
          hanger={"0%"}
          anchor={"0%"}
          gap={10}
          moveType={{ type: "snap", count: 1 }}
          collectStatistics={true}
          plugins={[new Fade("", 0.5)]}
        >
          {" "}
          {cards.map((card, index) => (
            <AnimalCard
              onClick={() =>
                this.setState({ selected: [...this.state.selected, index] })
              }
              imageSrc={card.imageSrc}
              key={index}
            >
              <MapButton>
                <MapIcon
                  className={
                    this.state.selected.indexOf(index) <= -1
                      ? "fas fa-paw"
                      : "fas fa-check"
                  }
                />
              </MapButton>
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
          <StartButton onClick={() => this.props.history.push("/tracking")}>
            <StartTitle>
              Start
              <br />
              Tracking
            </StartTitle>
            <ArrowIcon className="fas fa-long-arrow-alt-right" />
          </StartButton>
        </Flicking>
      </Container>
    );
  }
}

export default Select;
