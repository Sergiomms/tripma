"use client";

import { Content, DestinationInput, Title, TitleContainer } from "./styles";

export default function Home() {
  return (
    <Content>
      <TitleContainer>
        <Title>It{`'`}s more than just a trip</Title>
        <DestinationInput/>
      </TitleContainer>
    </Content>
  );
}
