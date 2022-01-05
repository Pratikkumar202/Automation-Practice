
class Assertion {
    toContain(actual:string | string[] | undefined, expected:string | string[] | undefined) {
        expect(actual).toContain(expected)
    }
}
export default new Assertion()