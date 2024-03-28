import calculatePrice from "../services/priceCalculationService";
import { Types } from "../services/priceCalculationService"

describe('calculatePrice', () => {
    it('should return 0 if total_distance is 0', () => {
        expect(calculatePrice(0, 5, Types.type1, 1.5, 10)).toBe(0);
    });

    it('should calculate the total price correctly for perishable items', () => {
        expect(calculatePrice(10, 5, Types.type1, 1.5, 10)).toBe(17.5);
    });

    it('should calculate the total price correctly for non-perishable items', () => {
        expect(calculatePrice(10, 5, Types.type2, 1, 10)).toBe(15);
    });

    it('should round the total price to the nearest cent', () => {
        expect(calculatePrice(12, 5, Types.type2, 1, 10)).toBe(17);
    });

    it('should throw an error if total_distance is negative', () => {
        expect(() => calculatePrice(-10, 5, Types.type1, 1.5, 10)).toThrow('Total distance cannot be negative');
    });

    it('should return 0 if total_distance is 0', () => {
        expect(calculatePrice(0, 5, Types.type1, 1.5, 10)).toBe(0);
    });

    it('should calculate the total price correctly for perishable items when remaining distance is zero', () => {
        expect(calculatePrice(5, 5, Types.type1, 1.5, 10)).toBe(10);
    });

    it('should calculate the total price correctly for perishable items when remaining distance is positive', () => {
        expect(calculatePrice(10, 5, Types.type1, 1.5, 10)).toBe(17.5);
    });

    it('should calculate the total price correctly for non-perishable items when remaining distance is zero', () => {
        expect(calculatePrice(5, 5, Types.type2, 1, 10)).toBe(10);
    });

    it('should calculate the total price correctly for non-perishable items when remaining distance is positive', () => {
        expect(calculatePrice(10, 5, Types.type2, 1, 10)).toBe(15);
    });

    it('should round the total price down to the nearest cent', () => {
        expect(calculatePrice(12, 5, Types.type2, 1, 10)).toBe(17);
    });

    it('should round the total price up to the nearest cent', () => {
        expect(calculatePrice(12, 5, Types.type2, 0.005, 10)).toBe(10.04);
    });

    it('should handle large distances and prices', () => {
        expect(calculatePrice(10000, 5000, Types.type2, 2.5, 100)).toBe(12600);
    });

    it('should handle large distances and small prices', () => {
        expect(calculatePrice(10000, 5000, Types.type2, 0.25, 200)).toBe(1450);
    });

    it('should handle maximum possible distance', () => {
        expect(calculatePrice(Number.MAX_SAFE_INTEGER, 0, Types.type1, 1.5, 10)).toBeGreaterThan(0);
    });

    it('should handle maximum possible base distance', () => {
        expect(calculatePrice(100, Number.MAX_SAFE_INTEGER, Types.type1, 1.5, 10)).toBeGreaterThan(0);
    });

    it('should handle maximum possible km price', () => {
        expect(calculatePrice(10, 5, Types.type1, Number.MAX_SAFE_INTEGER, 10)).toBeGreaterThan(0);
    });

    it('should handle maximum possible fix price', () => {
        expect(calculatePrice(10, 5, Types.type1, 1.5, Number.MAX_SAFE_INTEGER)).toBeGreaterThan(0);
    });

    // Test cases for specific combinations of item type and pricing
    it('should handle non-perishable items with zero base distance and price', () => {
        expect(calculatePrice(0, 0, Types.type2, 0, 0)).toBe(0);
    });

    it('should handle perishable items with zero base distance and price', () => {
        expect(calculatePrice(0, 0, Types.type1, 0, 0)).toBe(0);
    });

    it('should handle non-perishable items with negative km price', () => {
        expect(calculatePrice(10, 5, Types.type2, -1, 10)).toBe(5);
    });

    it('should handle perishable items with negative fix price', () => {
        expect(calculatePrice(10, 5, Types.type1, 1.5, -10)).toBe(-2.5);
    });

    it('should handle negative remaining distance for non-perishable items', () => {
        expect(calculatePrice(2, 5, Types.type2, 1, 10)).toBe(10);
    });

    it('should handle negative remaining distance for perishable items', () => {
        expect(calculatePrice(2, 5, Types.type1, 1.5, 10)).toBe(10);
    });

    it('should handle zero km price for non-perishable items', () => {
        expect(calculatePrice(10, 5, Types.type2, 0, 10)).toBe(10);
    });

    it('should handle zero fix price for perishable items', () => {
        expect(calculatePrice(10, 5, Types.type1, 1.5, 0)).toBe(7.5);
    });

});
