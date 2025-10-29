// You work in the best consumer electronics corporation, 
// and your boss wants to find out which three products generate 
// the most revenue. Given 3 lists of the same length like these:
// products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
// amounts: [3, 24, 8]
// prices: [199, 299, 399]
// Return the three product names with the highest revenues (amount * price), in descending order (highest to lowest revenue).
// Note: if multiple products have the same revenue, order them according to their original positions in the input list.


function top3(products, amounts, prices) {
    let revenues = amounts.map((e, i) => {
        return {
            name: products[i],
            value: e * prices[i]
        }
    })

    revenues.sort((a, b) => {
        return b.value - a.value;
    })

    revenues = revenues.slice(0, 3);
    revenues = revenues.map(e => e.name);

    return revenues;
}
