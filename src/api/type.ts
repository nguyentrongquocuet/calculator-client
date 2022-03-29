import Axios from 'axios';

export type Requestor = typeof Axios;

export type OperationInput = number | string;

export type Operation = (a: OperationInput, b: OperationInput) => Promise<string>;

type OperationName = 'add' | 'subtract' | 'multiply' | 'divide' | 'power' | 'notSupported';

type CustomOperation = (input1: OperationInput,
  operation: OperationInput,
  input2: OperationInput
) => Promise<string>;

export type Service = Record<OperationName, Operation> & {
  performOperation: CustomOperation
};
