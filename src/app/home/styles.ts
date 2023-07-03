"use client";
import px2vw from "@/utils/px2vw";
import { styled } from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Title = styled.div`
  font-size: 6em;
  font-weight: bold;
  text-align: center;
  background-image: linear-gradient(#A05DEC, #1CA6E6, #A05DEC);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  cursor: default;
  margin-top: ${px2vw(75)};
`;

export const TitleContainer = styled.div`
  width: ${px2vw(700)};
`;
