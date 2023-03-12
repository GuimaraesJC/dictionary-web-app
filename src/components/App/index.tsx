import Header from 'components/Header';
import SearchInput from 'components/SearchInput';
import Content from 'components/Content';

import * as S from './styles';

function App() {
  return (
    <S.Wrapper>
      <Header />
      <SearchInput />
      <Content />
    </S.Wrapper>
  );
}

export default App;
