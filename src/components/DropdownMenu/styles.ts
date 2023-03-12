import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &::after {
    content: '';
    height: 2rem;
    border-right: 1px solid ${({ theme }) => theme.colors.grayLighter};
    margin: 0 1.625rem;
  }
`;

interface MenuProps {
  selectedFontFamily: string;
}

export const Menu = styled.div<MenuProps>`
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    font-size: 1.125rem;
    font-weight: 700;
    font-family: ${({selectedFontFamily}) => selectedFontFamily};
  }

  img {
    margin-left: 1.125rem;
  }
`;

export const Dropdown = styled.ul`
  position: absolute;
  top: 2.2rem;
  right: 3.25rem;
  width: 11.5rem;
  height: 9.5rem;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
  background-color: ${({theme}) => theme.colors.white};
`;

interface OptionProps {
  fontFamily: string;
}

export const Option = styled.li<OptionProps>`
  font-family: ${({fontFamily}) => fontFamily};
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.5rem;
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    color: ${({theme}) => theme.colors.purple};
  }
`;
