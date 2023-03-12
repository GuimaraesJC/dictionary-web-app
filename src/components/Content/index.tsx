import ContentHeader from './ContentHeader';
import ContentSection from './ContentSection';

import * as S from './styles';

function Content() {
  return (
    <S.Wrapper>
      <ContentHeader />
      <ContentSection />
      <ContentSection />
      <ContentSection />
    </S.Wrapper>
  );
}

export default Content;
