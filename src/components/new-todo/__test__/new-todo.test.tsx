import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { NewTodo } from '../new-todo';

// const newTotoReactEl = <NewTodo onSubmit={console.log} />

const defaultCompare = (i1: any, i2: any) => i1 === i2;

const compareArr = <I1 = any, I2 = any>(
  arr1: I1[],
  arr2: I2[],
  compareFn: (i1: I1, i2: I2) => boolean = defaultCompare,
) => {
  if (arr1.length !== arr2.length) return false;

  return !arr1.some((v1, index) => !compareFn(v1, arr2[index]));
};

describe('NewTodo Component', () => {
  afterEach(cleanup);

  test('Render select element', () => {
    const element = render(<NewTodo onSubmit={console.log} />);
    expect(!!element.container.querySelector('select')).toBe(true);
  });

  test('Render select option', () => {
    const element = render(<NewTodo onSubmit={console.log} />);
    const optionElements = element.container.querySelector('select')!.querySelectorAll('option');

    const priorList = ['LOW', 'MEDIUM', 'HIGH'].reverse();

    const optionElementList = Array.from(optionElements);

    const renderedPriorList = optionElementList.map((el) => el.value);

    expect(compareArr(priorList, renderedPriorList)).toBe(true);
  });

  test('Trigger submit on <Enter> keydown', (done) => {
    const element = render(<NewTodo onSubmit={() => done()} />);

    const input = element.container.querySelector('input');

    fireEvent(input!, new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
  });
});
