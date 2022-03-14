function composeResult<F extends (arg: any) => any>(fn: F): F;

function composeResult<I, R, R1, R2>(
  fn1: (arg: I) => R1,
  fn2: (arg: I) => R2,
  compose: (r1: R1, r2: R2) => R
): (arg: I) => R;

function composeResult<I, R, R1, R2, R3>(
  fn1: (arg: I) => R1,
  fn2: (arg: I) => R2,
  fn3: (arg: I) => R3,
  compose: (r1: R1, r2: R2, r3: R3) => R
): (arg: I) => R;

function composeResult<I, R, R1, R2, R3, R4>(
  fn1: (arg: I) => R1,
  fn2: (arg: I) => R2,
  fn3: (arg: I) => R3,
  fn4: (arg: I) => R4,
  compose: (r1: R1, r2: R2, r3: R3, r4: R4) => R
): (arg: I) => R;

function composeResult<I = any, F extends Function[] = Function[]>(
  ...fns: F
): any {
  if (fns.length === 0) {
    return (arg: I) => fns[0](arg);
  }

  const fn = (arg: I) => {
    const composeFn = fns[fns.length - 1];
    const generatorFns = fns.slice(0, -1);
    const results = generatorFns.map((generatorFn) => generatorFn(arg));

    return composeFn(...results);
  };

  return fn;
}

export { composeResult };
