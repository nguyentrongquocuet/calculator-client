/**
 * An implementation of:
 * - State pattern
 * - Singleton pattern
 * - Chain of responsibilities pattern
 * - Functional programming
 */

import { OperationInput, Service } from './type';
import { createService as createRESTService } from './rest.service';
import { createService as createSOAPService } from './soap.service';

enum ServiceType {
  SOAP = 'SOAP',
  REST = 'REST',
}

let calService: CalculatorService;

class CalculatorService {
  private serviceType: ServiceType = ServiceType.REST;

  private restService: Service;

  private soapService: Service;

  private currentService!: Service;

  private constructor(soapURL: string, restURL: string) {
    this.soapService = createSOAPService(soapURL);
    this.restService = createRESTService(restURL);
    this.updateService();
  }

  // eslint-disable-next-line class-methods-use-this
  static init(soapURL: string, restURL: string) {
    if (calService) return calService;

    return new CalculatorService(soapURL, restURL);
  }

  switchToSOAP() {
    this.serviceType = ServiceType.SOAP;
    this.updateService();
    return this;
  }

  switchToREST() {
    this.serviceType = ServiceType.REST;
    this.updateService();
    return this;
  }

  updateService() {
    switch (this.serviceType) {
      case ServiceType.REST:
        this.currentService = this.restService;
        return this;
      default:
        this.currentService = this.soapService;
        return this;
    }
  }

  getService() {
    return this.currentService;
  }

  add(m: OperationInput, n: OperationInput) {
    return this.currentService.add(m, n);
  }

  subtract(m: OperationInput, n: OperationInput) {
    return this.currentService.subtract(m, n);
  }

  divide(m: OperationInput, n: OperationInput) {
    return this.currentService.divide(m, n);
  }

  power(m: OperationInput, n: OperationInput) {
    return this.currentService.power(m, n);
  }

  multiply(m: OperationInput, n: OperationInput) {
    return this.currentService.multiply(m, n);
  }

  notSupported(m: OperationInput, n: OperationInput) {
    return this.currentService.notSupported(m, n);
  }

  performOperation(m: OperationInput, operation: OperationInput, n: OperationInput) {
    return this.currentService.performOperation(m, operation, n);
  }
}

export { CalculatorService };
