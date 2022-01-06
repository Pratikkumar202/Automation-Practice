import { ChainablePromiseElement } from "webdriverio"

class Assertion {
     toContain(actual:string | string[] | undefined, expected:string | string[] | undefined) {
     expect(actual).toContain(expected)
    }

    async toHaveTextContain(element:ChainablePromiseElement<Promise<WebdriverIO.Element>>, expectedText:string) {
        await expect(element).toHaveTextContaining(expectedText)
        // addLog(`Assertion >> ${await element.selector} to have text containing ${expectedText}`)
    }
}
export default new Assertion()