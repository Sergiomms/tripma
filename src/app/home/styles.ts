"use client";
import { branco, cinza, preto, roxoTripma3 } from "@/utils/colors";
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

export const DestinationInput = styled.input`
  width: ${px2vw(250)};
  height: ${px2vw(25)};
  margin-top: ${px2vw(100)};
  display: flex;
  padding: ${px2vw(4)} ${px2vw(6)};
  gap: ${px2vw(4)};
  align-self: stretch;
  font-size: ${px2vw(16)};
  box-shadow: 0px 0px 2px ${preto} !important;
  border-radius: 4px;
  border: 1px solid ${cinza};
  background: ${branco}; 

  &&:focus {
    outline: none;
    border: 2px solid ${roxoTripma3} !important;
    
  }


`;
