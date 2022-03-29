import React from 'react';
import { CalculatorService } from '@/api/calculator';

const SOAPURL = 'http://localhost:1874/soapWS';

const RESTURL = 'http://localhost:8080/calculator';

const calculatorService = CalculatorService.init(SOAPURL, RESTURL);

calculatorService.switchToSOAP();

const View = () => {
  const num1Ref = React.createRef<HTMLInputElement>();
  const num2Ref = React.createRef<HTMLInputElement>();
  const operationRef = React.createRef<HTMLSelectElement>();

  const [result, setResult] = React.useState('');

  const getState = () => {
    if (!num1Ref.current) throw new Error('unexpected');
    if (!num2Ref.current) throw new Error('unexpected');
    if (!operationRef.current) throw new Error('unexpected');

    return {
      num1: num1Ref.current.value,
      num2: num2Ref.current.value,
      operation: operationRef.current.value,
    };
  };

  const onSubmit = () => {
    const { operation, num1, num2 } = getState();

    calculatorService.performOperation(num1 || 0, operation, num2 || 0).then((res) => {
      setResult(res);
    });
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="calculator">
          <label htmlFor="num1" className="formLabel">
            Number 1
            <input id="num1" type="number" ref={num1Ref} />
          </label>
          <label htmlFor="num1" className="formLabel">
            Operation
            <select id="operation" ref={operationRef}>
              <option value="+">
                Add
              </option>
              <option value="-">
                Subtract
              </option>
              <option value="*">
                Multiply
              </option>
              <option value="/">
                Divide
              </option>
              <option value="**">
                Power
              </option>
            </select>
          </label>
          <label htmlFor="num2" className="formLabel">
            Number 1
            <input id="num2" type="number" ref={num2Ref} />
          </label>
        </div>
        <div className="result">
          <span>
            Result
          </span>
          <span>
            {result}
          </span>
        </div>
        <div className="trigger">
          <button onClick={onSubmit} type="button">
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
};

export default View;
