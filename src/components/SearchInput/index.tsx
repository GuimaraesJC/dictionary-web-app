import { useState } from 'react';

import * as S from './styles';

function SearchInput() {
  const [hasError, setHasError] = useState<boolean>(false);

  return (
    <S.Wrapper>
      <S.Input
        type="text"
        placeholder="Search for any word..."
        className={hasError ? 'error' : ''}
      />
      <S.SearchIcon />
      {hasError && (
        <S.ErrorMessage>Whoops, can&apos;t be empty…</S.ErrorMessage>
      )}
    </S.Wrapper>
  );
}

export default SearchInput;
