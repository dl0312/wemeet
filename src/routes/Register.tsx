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

interface Props extends RouteChildrenProps {}

interface State {}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
`;

const Subtitle = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Button = styled.div`
  align-self: center;
  font-size: 1.5rem;
  border-radius: 1rem;
  padding: 0.5rem 0.8rem;
  cursor: pointer;
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
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`;

class Register extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
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
        gap={25}
        moveType={{ type: "snap", count: 1 }}
        collectStatistics={true}
        plugins={[new Fade()]}
      >
        <Container>
          <TopSection>
            <Title>
              Did you
              <br />
              lose your pet?
            </Title>
          </TopSection>
          <BottomSection>
            <Button
              style={{ color: "white", background: "rgba(23, 198, 165, 1)" }}
            >
              Make a form
            </Button>
            <Button
              style={{ background: "white", color: "rgba(23, 198, 165, 1)" }}
            >
              Sign In
            </Button>
          </BottomSection>
        </Container>

        <Container>
          <TopSection>
            <Subtitle>What kind of pet did you lose?</Subtitle>
            <CustomCheckbox checked={true}>Charles</CustomCheckbox>
            <CustomCheckbox>Wang Wang</CustomCheckbox>
          </TopSection>
          <BottomSection>
            <Button
              style={{ color: "white", background: "rgba(23, 198, 165, 1)" }}
            >
              Sign In
            </Button>
          </BottomSection>
        </Container>

        <Container>
          <TopSection>
            <Subtitle>Where did you lose?</Subtitle>
          </TopSection>
          <BottomSection>
            <Button
              style={{ color: "white", background: "rgba(23, 198, 165, 1)" }}
            >
              Sign In
            </Button>
          </BottomSection>
        </Container>
        <Container>
          <TopSection>
            <Subtitle>What time did you lose?</Subtitle>
          </TopSection>
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
