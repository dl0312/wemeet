import React from "react";
import styled from "styled-components";

const Container = styled.div`
  z-index: 2;
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 0 17px 0px rgba(0, 0, 0, 0.5);
`;

const Icon = styled.i``;

class CustomMarker extends React.Component {
  render() {
    const { bgColor, fontColor } = this.props;
    return (
      <Container style={{ background: bgColor }}>
        <Icon style={{ color: fontColor }} className="fas fa-paw" />
      </Container>
    );
  }
}

export default CustomMarker;
