import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Copyright from "/src/components/ui/copyright/copyright";
import { StyledFooter } from "./styles";

function Footer() {
  return (
    <StyledFooter>
      <Logo />
      <Copyright />
    </StyledFooter>
  );
}

export default Footer;
