import sum from "../TestSum";

test("Check sum of 2 positive numbers",()=>{
    expect(sum(2,2)).toBe(4);
})