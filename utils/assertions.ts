
class Assertion {
    toContain(actual:string | string[], expected:string | string[]) {
        expect(actual).toContain(expected)
        // addLog(`Assertion >> ${actual} to contain ${expected}`)
    }
}
export default new Assertion()