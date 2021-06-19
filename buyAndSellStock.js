const getMaxProfit = (prices) => {
    let maxProfit = 0;

    for (let buy = 0; buy < prices.length; buy++) {
        const buyPrice = prices[buy];

        for (let sell = buy + 1; sell < prices.length; sell++) {
            const sellPrice = prices[sell];
            const currentProfit = sellPrice - buyPrice;

            maxProfit = Math.max(maxProfit, currentProfit);
        }
    }

    return maxProfit;
};


console.log(getMaxProfit([7, 1, 5, 3, 6, 4]))