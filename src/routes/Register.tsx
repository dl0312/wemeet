import React from "react";
import {
  FlickingEvent,
  SelectEvent,
  ChangeEvent,
  NeedPanelEvent
} from "@egjs/flicking";
import Flicking from "@egjs/react-flicking";
import { Fade } from "@egjs/flicking-plugins";
import styled from "styled-components";
import { Checkbox } from "antd";
import { RouteChildrenProps } from "react-router";
import ChooseLocation from "../assets/chooseLocation.png";
import ChooseTime from "../assets/chooseTime.png";

interface Props extends RouteChildrenProps {}

interface State {
  index: number;
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 3rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`;

const Subtitle = styled.div`
  font-size: 2.2rem;
  margin-top: 3rem;
  margin-bottom: 4rem;
  line-height: 1.3;
`;

const Button = styled.div`
  align-self: center;
  font-size: 1.5rem;
  border-radius: 3rem;
  padding: 0.8rem 1rem;
  cursor: pointer;
  width: 15rem;
  box-shadow: 0px 0px 20px 0px rgba(23, 198, 165, 0.5);
  margin-bottom: 1rem;
  text-align: center;
`;

const TopSection = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
`;

const BottomSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

const CustomCheckbox = styled(Checkbox)`
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const FormImage = styled.img``;

class Register extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      index: 0
    };
  }
  render() {
    return (
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
        defaultIndex={this.state.index}
        inputType={["touch", "mouse"]}
        thresholdAngle={45}
        bounce={10}
        autoResize={false}
        adaptive={false}
        bound={false}
        overflow={true}
        hanger={"50%"}
        anchor={"50%"}
        gap={0}
        moveType={{ type: "snap", count: 1 }}
        collectStatistics={true}
        plugins={[new Fade()]}
      >
        <Container>
          <TopSection>
            <Subtitle>
              What kind of
              <br />
              pet did you lose?
            </Subtitle>
            <CustomCheckbox checked={true}>Charles</CustomCheckbox>
            <CustomCheckbox>Wang Wang</CustomCheckbox>
          </TopSection>
          <BottomSection>
            <Button
              onClick={() => {
                this.setState({ index: this.state.index + 1 });
              }}
              style={{ color: "white", background: "rgba(23, 198, 165, 1)" }}
            >
              NEXT
            </Button>
          </BottomSection>
        </Container>

        <Container>
          <TopSection>
            <Subtitle>
              Where
              <br />
              did you lose?
            </Subtitle>
          </TopSection>
          <FormImage src={ChooseLocation} />
          <BottomSection>
            <Button
              onClick={() => {
                console.log(this.state.index);
                this.setState({ index: this.state.index + 1 });
              }}
              style={{ color: "white", background: "rgba(23, 198, 165, 1)" }}
            >
              NEXT
            </Button>
          </BottomSection>
        </Container>
        <Container>
          <TopSection>
            <Subtitle>
              What time
              <br />
              did you lose?
            </Subtitle>
          </TopSection>
          <FormImage src={ChooseTime} />
          <BottomSection>
            <Button
              style={{ color: "white", background: "rgba(23, 198, 165, 1)" }}
              onClick={() => this.props.history.push("/select")}
            >
              Regist
            </Button>
          </BottomSection>
        </Container>
      </Flicking>
    );
  }
}

export default Register;
