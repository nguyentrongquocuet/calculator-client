import Axios from 'axios';
import { XMLParser } from 'fast-xml-parser';
import { OperationInput, Requestor, Service } from './type';

const parser = new XMLParser();

const parseXML = (xml: string) => parser.parse(xml);

const extractResponseBody = (xml: string) => {
  const parsedXml = parseXML(xml);

  return parsedXml['SOAP-ENV:Envelope']['SOAP-ENV:Body'];
};

const extractOperationResult = (responseBody: Record<string, any>) => responseBody['ns2:calculatorResponse']['ns2:result'];

const createBody = (ip1: OperationInput, op: OperationInput, ip2: OperationInput) => `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
                  xmlns:us="http://quoc.com/soap-calculator">
    <soapenv:Header/>
    <soapenv:Body>
        <us:calculatorRequest>
            <us:input1>${ip1}</us:input1>
            <us:operation>${op}</us:operation>
            <us:input2>${ip2}</us:input2>
        </us:calculatorRequest>
    </soapenv:Body>
</soapenv:Envelope>`;

type RequestBodyCreator = (m: OperationInput, n: OperationInput) => string;

const add: RequestBodyCreator = (m, n) => createBody(m, '+', n);

const substract: RequestBodyCreator = (m, n) => createBody(m, '-', n);

const multiply: RequestBodyCreator = (m, n) => createBody(m, '*', n);

const power: RequestBodyCreator = (m, n) => createBody(m, '**', n);

const divide: RequestBodyCreator = (m, n) => createBody(m, '/', n);

const notSupported: RequestBodyCreator = (m, n) => createBody(m, '***', n);

const RequestBodyCreators = {
  add,
  substract,
  multiply,
  power,
  divide,
  notSupported,
};

const performOperationCreator = (baseUrl: string, requestor: Requestor) => (operationXml: string) => requestor.post(baseUrl, operationXml, { headers: { 'Content-Type': 'text/xml' } })
  .then((res) => res.data)
  .then(extractResponseBody)
  .then(extractOperationResult);

const createService = (baseUrl: string, requestor: Requestor = Axios) => {
  const performOperation = performOperationCreator(baseUrl, requestor);

  const operationMap: Service = {
    add: (m, n) => performOperation(RequestBodyCreators.add(m, n)),
    subtract: (m, n) => performOperation(RequestBodyCreators.substract(m, n)),
    divide: (m, n) => performOperation(RequestBodyCreators.divide(m, n)),
    multiply: (m, n) => performOperation(RequestBodyCreators.multiply(m, n)),
    power: (m, n) => performOperation(RequestBodyCreators.power(m, n)),
    notSupported: (m, n) => performOperation(RequestBodyCreators.add(m, n)),
    performOperation: (m, o, n) => performOperation(createBody(m, o, n)),
  };

  return operationMap;
};

export { createService };
