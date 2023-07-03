"use client"

import { branco, roxoTripma } from "@/utils/colors";
import px2vw from "@/utils/px2vw";
import { styled } from "styled-components"

interface Props {
  width?: string
  height?: string
  fontSize?: string
}

export const PrimaryButtonStyles = styled.div<Props>`
  background: ${roxoTripma};
  width: ${(props) => props.width || px2vw(75)};
  height: ${(props) => props.height || px2vw(35)};
  border-radius: ${px2vw(5)};
  color: ${branco};
  font-weight: normal;
  font-size: ${(props) => props.fontSize || px2vw(11)};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;