import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

interface IRowProps {
  'justify-content'?: CSSStyleDeclaration['justifyContent'];
}

const StyledRow = styled.div<IRowProps>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => props['justify-content'] || 'flex-start'};
`;

interface IColProps {
  span?: number;
}

const getWidthOfSpan = (span: number) => {
  let width = 0;
  if (span >= 24) width = 100;
  else if (span < 0) width = 0;
  else width = span / 24;
  return width;
};

const StyledCol = styled.div<IColProps>`
  width: ${(props) => getWidthOfSpan(props.span ?? 24)}%;
  flex: 0 0 ${(props) => getWidthOfSpan(props.span ?? 24)}%;
`;

export { StyledContainer, StyledRow, StyledCol };
