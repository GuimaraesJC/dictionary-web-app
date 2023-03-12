import * as S from './styles';

import iconMoon from 'assets/images/icon-moon.svg';

function ThemeToggle() {
  return (
    <S.Wrapper>
      <S.Switch>
        <input type="checkbox" />
        <span className="slider" />
      </S.Switch>
      <img src={iconMoon} alt="Light theme" />
    </S.Wrapper>
  );
}

export default ThemeToggle;
