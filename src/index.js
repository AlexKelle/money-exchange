const rates = {
    H: 50,
    Q: 25,
    D: 10,
    N: 5,
    P: 1,
};

// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    }

    const result = {};
    Object.entries(rates).forEach(([key, value]) => {
        const count = Math.floor(currency / value);
        if (count > 0) {
            result[key] = count;
            currency -= value * count;
        }
    });
    return result;
};
