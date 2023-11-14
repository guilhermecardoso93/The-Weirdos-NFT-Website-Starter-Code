import { Link } from "react-router-dom";
import { LogoText } from "./style";

export function Logo() {
  return (
    <LogoText>
      <Link to="/">w.</Link>
    </LogoText>
  );
}
