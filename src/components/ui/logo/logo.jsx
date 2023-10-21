import react from "react";
import { ReactComponent as LogoImage } from "/src/assets/logo.svg";
import { Text, StyledLogo, StyledLogoMainPage } from "./styles";
import { AppRoute } from "/src/const";
import { useLocation } from "react-router-dom";

function Logo() {
  const { parthname } = useLocation();

  return parthname === AppRoute.MAIN ? (
    <StyledLogoMainPage>
      <LogoImage />
      <Text>Фермерские продукы</Text>
    </StyledLogoMainPage>
  ) : (
    <StyledLogo to={AppRoute.MAIN}>
      <LogoImage />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}

export default Logo;
