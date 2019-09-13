declare global {
  export namespace Chai {
    interface Assertion {
      rendered: Assertion;
      diasbled: Assertion;

      textContent(expectedTextContent: string): Assertion;
      htmlContent(expectedHtmlContent: string): Assertion;
      count(expectedCount: number): Assertion;
      class(expectedClassName: string): Assertion;
      localClass(expectedLocalClassName: string): Assertion;
      style(cssAttribute: string, expectedValue: string): Assertion;
      attribute(domAttribute: string, expectedValue: string): Assertion;
      value(expectedValue: string): Assertion;
    }
  }
}

declare const emberChaiDomHelpers: Chai.ChaiPlugin;
declare namespace emberChaiDomHelpers { }
export = emberChaiDomHelpers;
