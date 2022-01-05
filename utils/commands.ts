import { ChainablePromiseArray, ChainablePromiseElement, ElementArray } from "webdriverio";

export const selectDropdown = async(elements:ChainablePromiseArray<ElementArray>, value:string)=> {
    for (let i = 0; i < (await elements).length; i++) {
        const elem = await  elements[i].getAttribute('value');
        if (elem === value) {
            await elements[i].click()
            // await browser.takeScreenshot()
            break;
        }
    }
}
