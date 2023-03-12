import { useState } from 'react';

import * as S from './styles';

function SearchInput() {
  const [hasError, setHasError] = useState<boolean>(false);

  return (
    <>
      <S.Input
        type="text"
        placeholder="Search for any word..."
        className={hasError ? 'error' : ''}
      />
      {hasError && (
        <S.ErrorMessage>Whoops, can’t be empty…</S.ErrorMessage>
      )}
    </>
  );
}

export default SearchInput;
