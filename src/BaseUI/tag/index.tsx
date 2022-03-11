import { COLORS, getSizeStyle, TUISize } from '@/app/theme';
import styled from 'styled-components';

const getCSSColor = (color?: string) => {
  if (!color) return COLORS.blue;

  return COLORS[color as keyof typeof COLORS] || color;
};

interface ITagProps {
  size?: TUISize;
  color?: string;
}

export const StyledTag = styled.span<ITagProps>`
  display: inline-block;
  padding: 0.125em;
  border: 1px solid;
  border-radius: 0.125em;
  color: ${(props) => getCSSColor(props.color)};
  font-size: ${(props) => getSizeStyle(props.size)['font-size']};
`;
