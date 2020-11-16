import { expect, it } from "@jest/globals";
import { checkCells } from "./gameoflife";

describe("check neighbours", () => {
    // test passes
    it("has less than 2, its dies", () => {
        const result = checkCells(1);
        expect(result).toBe(false);
    })
    it("has more than 3, it dies", () => {
        expect(checkCells(4)).toBe(false);
    })
})