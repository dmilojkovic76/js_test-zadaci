// Za funkciju random
exports.random_min = 1;
exports.random_max = 2; // can return 1 or 2

// Za funkciju minIntegerFromArray
// exports.minArray = [1, 'etf', 'kgj', 4, 0, 2]; // return 0
// exports.minArray = ['etf', 'kgj', 4, 0]; // return false
exports.minArray = ['s', 'etf', 'kgj', 'rd', [12, 13], { key: 'pair'}]; // return false

// Za funkciju MinIntegerFromString
exports.minIntString = 'Danas, 17tog Septembra, bice hladnije nego juce u 20h, 16og Septembra' // return 16
// exports.minIntString = 'Danas, bice hladnije nego juce u' // return false

// Za funkciju concatStringByLength
exports.concatString = ['abc', 'ac', 'bdca', 'edagas'];
exports.concatType = 0;  // return acabcbdcaedagas
