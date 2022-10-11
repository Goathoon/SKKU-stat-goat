const { test, expect } = require("@jest/globals");//test와 expect만 가져올것.
const lib = require('./lib');

test("sum([1,2]) should be 3", () => {
    expect(lib.add([1, 2])).toBe(3);
});
test("avg([3,5]) should be 4", () => {
    expect(lib.avg([3, 5])).toBe(4);
});
test("max([-1,3,2]) should be 3", () => {
    expect(lib.max([-1, 3, 2])).toBe(3);
});

