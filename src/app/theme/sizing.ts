const SIZE = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

const SIZE_STYLES = {
  small: { 'font-size': '.875em' },
  medium: { 'font-size': '1em' },
  large: { 'font-size': '1.125em' },
};

type TUISize = keyof typeof SIZE;

const getSizeStyle = (size?: TUISize) => {
  if (!size) return SIZE_STYLES.medium;

  return SIZE_STYLES[size];
};

export {
  SIZE,
  SIZE_STYLES,
  getSizeStyle,
};

export type { TUISize };
