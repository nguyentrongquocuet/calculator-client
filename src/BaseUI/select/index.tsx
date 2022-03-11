import { getSizeStyle, TUISize } from '@/app/theme';
import styled, { StyledComponent } from 'styled-components';

const StyledSelectOption = styled.option<ISelectProps>``;

interface ISelectProps {
  size?: TUISize;
}

const StyledSelect = styled.select<ISelectProps>`
  font-size: ${(props) => getSizeStyle(props.size)['font-size']};
` as StyledComponent<'select', any, ISelectProps, never> & {
  Option: typeof StyledSelectOption;
};

StyledSelect.Option = StyledSelectOption;

export { StyledSelect };
