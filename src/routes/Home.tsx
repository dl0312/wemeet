import React from "react";
import { RouteChildrenProps } from "react-router";
import styled from "styled-components";
import SearchDog from "../assets/searchDog.png";

interface Props extends RouteChildrenProps {}

interface State {}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 3rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
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
const SearchDogImage = styled.img`
  width: 12rem;
  align-self: center;
  margin-bottom: 2rem;
`;

export default class Home extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <TopSection>
          <Title>
            Did you
            <br />
            lose your pet?
          </Title>
        </TopSection>
        <SearchDogImage src={SearchDog} />
        <BottomSection>
          <Button
            style={{ color: "white", background: "rgba(23, 198, 165, 1)" }}
            onClick={() => this.props.history.push("/register")}
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
    );
  }
}
