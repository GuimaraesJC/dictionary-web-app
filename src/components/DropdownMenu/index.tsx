import { useState } from 'react';

import * as S from './styles';
import options from './options';

import arrowDown from 'assets/images/icon-arrow-down.svg';

type Font = {
  label: string;
  fontFamily: string;
};

function DropdownMenu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selectedFont, setSelectedFont] = useState<Font>(
    { label: 'Sans Serif', fontFamily: 'Inter' }
  );

  const handleOpen = () => {
    setIsDropdownOpen((previousState) => !previousState);
  };

  const handleSelectOption = (label: string, fontFamily: string) => {
    setSelectedFont({ label, fontFamily });
    setIsDropdownOpen(false);
  };

  return (
    <S.Wrapper>
      <S.Menu
        onClick={handleOpen}
        selectedFontFamily={selectedFont.fontFamily}
      >
        <span>{selectedFont.label}</span>
        <img src={arrowDown} alt="Open font options" />
      </S.Menu>

      {isDropdownOpen && (
        <S.Dropdown>
          {options.map(({ label, value, fontFamily }) => (
            <S.Option
              key={value}
              fontFamily={fontFamily}
              onClick={() => handleSelectOption(label, fontFamily)}
            >
              {label}
            </S.Option>
          ))}

        </S.Dropdown>
      )}
    </S.Wrapper>
  );
}

export default DropdownMenu;
