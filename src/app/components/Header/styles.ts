"use client";

import { styled } from "styled-components";
import px2vw from "@/utils/px2vw";
import { branco, roxoTripma, roxoTripma2 } from "@/utils/colors";

export const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${px2vw(60)};
  width: 100%;
  background: ${branco};
`;

export const LogoImageCOntainer = styled.div`
  width: auto;
  margin-top: ${px2vw(5)};
  margin-left: ${px2vw(35)};
`;

export const NavigationButtonsBar = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: ${px2vw(30)};
`;

export const NavButtons = styled.div`
  color: ${roxoTripma2};
  cursor: pointer;

  &:Hover {
    color: ${roxoTripma};
  };
`;
