import { useNavigate } from "react-router";
import {
  HeaderContainer,
  Left,
  Logo,
  Right,
  UserDescription,
  UserInfo,
  UserName,
  UserPhoto,
} from "./styles";

interface HeaderProps {
  logoSrc: string;
  userName: string;
  userPhotoSrc: string;
  userDescription: string;
}

const Header = ({
  logoSrc,
  userName,
  userPhotoSrc,
  userDescription,
}: HeaderProps) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <HeaderContainer>
      <Left>
        <Logo
          src={logoSrc}
          alt="Logo"
          onClick={handleLogoClick}
          style={{ cursor: "pointer" }}
        />
      </Left>

      <Right>
        <UserInfo>
          <UserName>{userName}</UserName>
          <UserDescription>{userDescription}</UserDescription>
        </UserInfo>
        <UserPhoto src={userPhotoSrc} alt={userName} />
      </Right>
    </HeaderContainer>
  );
};

export default Header;
