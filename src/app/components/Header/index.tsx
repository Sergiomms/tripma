"use client";
import Image from "next/image";
import NameLogoImage from "../../../../public/images/name_logo.png";
import {
  HeaderBar,
  LogoImageCOntainer,
  NavButtons,
  NavigationButtonsBar,
} from "./styles";
import { useRouter } from "next/navigation";
import PrimaryButton from "../PrimaryButton";

export default function Header() {
  const router = useRouter();
  return (
    <HeaderBar>
      <LogoImageCOntainer>
        <Image
          src={NameLogoImage}
          alt="Name Logo Image"
          width={100}
          height={30}
        />
      </LogoImageCOntainer>
      <NavigationButtonsBar>
        <NavButtons onClick={() => router.push("/home")}>Flights</NavButtons>
        <NavButtons onClick={() => router.push("/teste")}>Hotels</NavButtons>
        <NavButtons onClick={() => router.push("/teste")}>Packages</NavButtons>
        <NavButtons onClick={() => router.push("/teste")}> Sign in</NavButtons>
        <PrimaryButton onClick={() => router.push("/teste")} text="Sign Up" />
      </NavigationButtonsBar>
    </HeaderBar>
  );
}
