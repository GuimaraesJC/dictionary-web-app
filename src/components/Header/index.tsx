import DropdownMenu from 'components/DropdownMenu';
import ThemeToggle from 'components/ThemeToggle';

import * as S from './styles';

import logo from 'assets/images/logo.svg';

function Header () {
  return (
    <S.Wrapper>
      <S.LogoContainer>
        <img src={logo} alt="Logo" />
      </S.LogoContainer>
      <S.MenuContainer>
        <DropdownMenu />
        <ThemeToggle />
      </S.MenuContainer>
    </S.Wrapper>
  );
}

export default Header;
