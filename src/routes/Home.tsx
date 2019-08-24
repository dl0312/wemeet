import React from "react";
import styled from "styled-components";

const Container = styled.section``;

const Title = styled.header``;

const Subtitle = styled.span``;

const FindPetCard = styled.div`
  position: relative;
`;

const Icon = styled.i`
  position: absolute;
  bottom: -1rem;
  right: 1rem;
  border-radius: 100%;
`;

interface Props {}

interface State {}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Title>title</Title>
        <Subtitle>subtitle</Subtitle>
        <FindPetCard>
          <Icon />
        </FindPetCard>
      </Container>
    );
  }
}

export default Home;
