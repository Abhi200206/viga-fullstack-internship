export enum Types {
    type1 = "perishable",
    type2 = "non-perishable"
}

const calculatePrice = (
    total_distance: number,
    base_distance_in_km: number,
    item_type: Types,
    km_price: number,
    fix_price: number
): number => {
    if (total_distance < 0) {
        throw new Error('Total distance cannot be negative');
    }
    if (total_distance == 0) {
        return 0;
    }
    let remainingDistance = total_distance - base_distance_in_km;
    let baseDistancePrice = fix_price;
    let remainingPrice = 0;

    if (remainingDistance > 0) {
        if (item_type === Types.type1 || item_type === Types.type2) {
            remainingPrice = remainingDistance * km_price;
        } else {
            throw new Error('Invalid item type');
        }
    }

    let totalPrice = baseDistancePrice + remainingPrice;
    totalPrice = Math.round(totalPrice * 100) / 100;
    return totalPrice;
};

export default calculatePrice;

