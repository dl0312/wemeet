import React, { Component } from "react";
import MapContainer from "../components/MapContainer";
import { markers } from "../data/markers";

import { GoogleApiWrapper } from "google-maps-react";
import Dog4 from "../assets/dog4.jpg";
import Dog2 from "../assets/dog2.jpg";
import Dog3 from "../assets/dog3.jpeg";
import Flicking from "@egjs/react-flicking";
import { Fade } from "@egjs/flicking-plugins";
import styled from "styled-components";
import Popup1 from "../assets/popup1.jpg";
import Popup2 from "../assets/popup2.jpg";
import Popup3 from "../assets/popup3.jpg";

const AnimalCard = styled.div`
  background: url(${({ imageSrc }) => imageSrc});
  background-position: center center;
  background-size: 100% auto;
  width: 20rem;
  min-height: 10rem;
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

const cards = [
  {
    place: "Pyengcon-dong, Anyang-si, Geonggi-do",
    time: "13:35pm",
    imageSrc: Dog4,
    color: "#00d1a9"
  },
  {
    place: "Pyengcon-dong, Anyang-si, Geonggi-do",
    time: "13:22pm",
    imageSrc: Dog2,
    color: "rgba(112, 158, 252,1)"
  },
  {
    place: "Pyengcon-dong, Anyang-si, Geonggi-do",
    time: "13:43pm",
    imageSrc: Dog3,
    color: "rgba(252, 192, 112, 1)"
  }
];

const popupCards = [Popup1, Popup2, Popup3];

const UpperSection = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
`;
const BottomSection = styled.div`
  padding: 0.5rem;
  background: white;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Location = styled.div`
  margin-bottom: 0.5rem;
  color: black;
`;

const LocationIcon = styled.i`
  margin-right: 0.5rem;
`;

const LocationTitle = styled.span`
  font-size: 0.8rem;
`;

const ColorBall = styled.div`
  border-radius: 100%;
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  box-shadow: 0px 0px 7px 3px rgba(255, 255, 255, 1);
`;

const Time = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);
`;

const FlickerContainer = styled.div`
  position: absolute;
  left: 1rem;
  bottom: 1rem;
`;

const DarkBackground = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  z-index: 2001;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ExitIcon = styled.i`
  position: absolute;
  font-size: 2rem;
  top: 1rem;
  right: 1rem;
  color: white;
`;

const googleMapsApiKey = "AIzaSyA1eXxSrO4j576TyyTHplmUopdD7hEnItI";

let myVar;

class Tracking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupOpen: false,
      currentIndex: 0,
      places: [...markers[0].data]
    };
  }
  componentDidMount = () => {
    console.log(this.state.places);
    for (let i = 0; i < markers[this.state.currentIndex].data.length; i++) {
      myVar = setTimeout(() => {
        this.setState({
          places: [...markers[this.state.currentIndex].data.slice(0, i)]
        });
      }, i * 1000);
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.currentIndex !== this.state.currentIndex) {
      console.log(this.state.places);
      for (let i = 0; i < 9; i++) {
        myVar = setTimeout(() => {
          this.setState({
            places: [...markers[this.state.currentIndex].data.slice(0, i)]
          });
        }, i * 1000);
      }
    }
  };
  render() {
    const { isPopupOpen } = this.state;
    return (
      <>
        {isPopupOpen && (
          <DarkBackground>
            <ExitIcon
              onClick={() => this.setState({ isPopupOpen: false })}
              className="far fa-times-circle"
            />
            <Flicking
              tag="div"
              classPrefix="eg-flick"
              deceleration={0.0075}
              horizontal={true}
              circular={false}
              infinite={false}
              infiniteThreshold={0}
              lastIndex={Infinity}
              threshold={40}
              duration={100}
              panelEffect={x => 1 - Math.pow(1 - x, 3)}
              defaultIndex={0}
              inputType={["touch", "mouse"]}
              thresholdAngle={45}
              bounce={10}
              autoResize={false}
              adaptive={false}
              bound={false}
              overflow={true}
              hanger={"50%"}
              anchor={"50%"}
              gap={5}
              moveType={{ type: "snap", count: 1 }}
              collectStatistics={true}
              plugins={[new Fade()]}
            >
              {popupCards.map((card, index) => (
                <AnimalCard imageSrc={card} key={index} />
              ))}
            </Flicking>
          </DarkBackground>
        )}
        <MapContainer
          key={this.state.currentIndex}
          lineColor={markers[this.state.currentIndex].color}
          defaultCenter={markers[this.state.currentIndex].data[4]}
          defaultZoom={17}
          places={this.state.places}
          google={this.props.google}
          currentIndex={this.state.currentIndex}
        />
        <FlickerContainer>
          <Flicking
            tag="div"
            onChange={e => {
              this.setState({ currentIndex: e.index });
            }}
            classPrefix="eg-flick"
            deceleration={0.0075}
            horizontal={true}
            circular={false}
            infinite={false}
            infiniteThreshold={0}
            lastIndex={Infinity}
            threshold={40}
            duration={100}
            panelEffect={x => 1 - Math.pow(1 - x, 3)}
            defaultIndex={0}
            inputType={["touch", "mouse"]}
            thresholdAngle={45}
            bounce={10}
            autoResize={false}
            adaptive={false}
            bound={false}
            overflow={true}
            hanger={"0%"}
            anchor={"0%"}
            gap={25}
            moveType={{ type: "snap", count: 1 }}
            collectStatistics={true}
            plugins={[new Fade()]}
          >
            {cards.map((card, index) => (
              <AnimalCard
                imageSrc={card.imageSrc}
                key={index}
                onClick={() => {
                  clearTimeout(myVar);
                  this.setState({ isPopupOpen: true });
                }}
              >
                <UpperSection>
                  <ColorBall style={{ background: card.color }} />
                  <Time>{card.time}</Time>
                </UpperSection>
                <BottomSection>
                  <Location>
                    <LocationIcon className="fas fa-location-arrow" />
                    <LocationTitle>{card.place}</LocationTitle>
                  </Location>
                </BottomSection>
              </AnimalCard>
            ))}
          </Flicking>
        </FlickerContainer>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: googleMapsApiKey,
  language: "KO"
})(Tracking);
