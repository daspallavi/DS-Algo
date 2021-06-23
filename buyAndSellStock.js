// const getMaxProfit = (prices) => {
//     let maxProfit = 0;

//     for (let buy = 0; buy < prices.length; buy++) {
//         const buyPrice = prices[buy];

//         for (let sell = buy + 1; sell < prices.length; sell++) {
//             const sellPrice = prices[sell];
//             const currentProfit = sellPrice - buyPrice;

//             maxProfit = Math.max(maxProfit, currentProfit);
//         }
//     }

//     return maxProfit;
// };


/**approach -2 */
const getMaxProfit = (prices) => {
    let minPrice = prices[0];
    let maxProft = 0;

    for (const price of prices) {
        const currentProfit = price - minPrice;
        minPrice = Math.min(minPrice, price);  // buying price

        maxProft = Math.max(maxProft, currentProfit);

    }

    return maxProft;
};


console.log(getMaxProfit([7, 1, 5, 3, 6, 4]))