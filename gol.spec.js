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


import { checkCell } from "./gameoflife";

describe("check neighbour", () => {
    // test passes
    it("has less than 2, its dies", () => {
        const result = checkCell("live", 1);
        expect(result).toBe(false);
    })
    it("has more than 3, it dies", () => {
        expect(checkCell("live", 4)).toBe(false);
    })
    it("has exactly 2 neighbours, it lives", () => {
        expect(checkCell("live", 2)).toBe(true);
    })
    it("has exactly 3 neighbours, it lives", () => {
        expect(checkCell("live", 3)).toBe(true);
    })
    it("is dead with 3 neighbours, it lives", () => {
        expect(checkCell("dead", 3)).toBe(true);
    })
    it("is dead with less than 3 neighbours, it fails", () => {
        expect(checkCell("dead", 2)).toBe(false);
    })
    it("is dead with more than 3 neighbours, it fails", () => {
        expect(checkCell("dead", 4)).toBe(false);
    })
})