import Axios from 'axios';
import { OperationInput, Service, Requestor } from './type';

type RestParams = {
  input1: OperationInput;
  operation: OperationInput;
  input2: OperationInput;
};

type RestParamsCreator = (m: OperationInput, n: OperationInput) => RestParams;

const createOperationParam = (
  ip1: OperationInput,
  op: OperationInput,
  ip2: OperationInput,
): RestParams => ({
  input1: ip1,
  operation: op,
  input2: ip2,
});

const add: RestParamsCreator = (m, n) => createOperationParam(m, '+', n);
const subtract: RestParamsCreator = (m, n) => createOperationParam(m, '-', n);
const divide: RestParamsCreator = (m, n) => createOperationParam(m, '/', n);
const multiply: RestParamsCreator = (m, n) => createOperationParam(m, '*', n);
const power: RestParamsCreator = (m, n) => createOperationParam(m, '**', n);
const notSupported: RestParamsCreator = (m, n) => createOperationParam(m, '***', n);

const ParamCreators = {
  add,
  subtract,
  divide,
  multiply,
  power,
  notSupported,
};

const performOperationCreator = (baseUrl: string, requestor: Requestor) => (params: RestParams) => requestor.get(baseUrl, { params, headers: { 'Content-Type': 'application/json' } })
  .then((res) => res.data)
  .then((data) => data.result);

const createService = (
  baseUrl: string,
  requestor: Requestor = Axios,
) => {
  const performOperation = performOperationCreator(baseUrl, requestor);

  const Operations: Service = {
    add: (m, n) => performOperation(ParamCreators.add(m, n)),
    subtract: (m, n) => performOperation(ParamCreators.subtract(m, n)),
    divide: (m, n) => performOperation(ParamCreators.divide(m, n)),
    multiply: (m, n) => performOperation(ParamCreators.multiply(m, n)),
    power: (m, n) => performOperation(ParamCreators.add(m, n)),
    notSupported: (m, n) => performOperation(ParamCreators.notSupported(m, n)),
    performOperation: (m, o, n) => performOperation(createOperationParam(m, o, n)),
  };

  return Operations;
};

export { createService };
