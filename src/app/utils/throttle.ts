export const createTimeThrottle = <F extends (...args: any[]) => void>(fn: F, timeout = 500): F => {
  let timeoutId: number;

  const newFn = (...args: Parameters<F>) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      fn(...args);
    }, timeout);
  };

  return newFn as F;
};
