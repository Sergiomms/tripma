"use client"

import { PrimaryButtonStyles } from "./styles";

type propsType = {
  text: String;
  onClick: () => void;
}

export default function PrimaryButton(props: propsType) {

  return <PrimaryButtonStyles onClick={props.onClick}>{props.text}</PrimaryButtonStyles>

}