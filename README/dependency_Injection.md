
there's a problem, when we access global object.. becoz, we lost the ability of ES 6
modules to do things like tree shaking and other features that come with ES6 modules. and it's just a bad practice.

angular create a instance for a service when we re
gister in a module and give us the instance whenever reference(service type) it in a constructor function.
Decorate used to get correct service when we put type in constructor by type declaration.

Angular provides a mechanism for us to create a key or token that we can use in the dependency injector without creating a class, and that is called the injection token.

The Injection Token's job is to simply create a token used for the depndency injection registry in order to find the instance of the service that we want.

useClass:
It is useful, for example, when unit testing components. We don’t have to provide the full service then, but we can create a separate class that will be able to implement the methods in a different way. Thanks to this, we will only test the component itself and not its interaction with the service.

useExisting:
Creates two ways to access the same service object with two different tokens.
It works well, e.g. when we have many methods on the service, and we only want to use a few of them. This helps in reducing the size of the interface.
Refer: https://medium.com/@matsal.dev/angular-usevalue-useclass-useexisting-and-usefactory-in-a-nutshell-97db8d206084

Sample service:
class CarService {
  getWeight(): number {...}
  getColor(): string {...}
  getName(): string {...}
  getWidth(): number {...}
  getHeight(): number { … }
  getModel(): string {...}
  getYear(): number {...}
  ...
}

Reduced implementation:
export abstract class CarSizeService {
  abstract getHeight: number;
  abstract getWidth: number;
}
providers: [{ provide: CarSizeService, useExisting: CarService}]




