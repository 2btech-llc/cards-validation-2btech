module.exports = {
    detectCardType,
    getCvcLength
};

// Custom card validation library

const cardTypes = [
    {
        type: 'visa',
        patterns: [4],
        cvcLength: 3,
    },
    {
        type: 'mastercard',
        patterns: [51, 52, 53, 54, 55],
        cvcLength: 3,
    },
    {
        type: 'american-express',
        patterns: [34, 37],
        cvcLength: 4,
    },
    {
        type: 'diners-club',
        patterns: [36, 38, [300, 305]],
        cvcLength: 3,
    },
    {
        type: 'discover',
        patterns: [6011, [622126, 622925], [644, 649], 65],
        cvcLength: 3,
    },
    {
        type: 'jcb',
        patterns: [2131, 1800, [3528, 3589]],
        cvcLength: 3,
    },
    {
        type: 'unionpay',
        patterns: [62, 88],
        cvcLength: 3,
    },
    {
        type: 'maestro',
        patterns: [5018, [5020, 5038], [6304, 6390]],
        cvcLength: 3,
    },
    {
        type: 'mir',
        patterns: [2200, 2204],
        cvcLength: 3,
    },
    {
        type: 'elo',
        patterns: [4011, 4312, 4389, 4514, 4573, 4576, 5041, 5066, 5067, 5090, 6277, 6362, 6363, 6500, [6504, 6507], [6516, 6517], [6550, 6552]],
        cvcLength: 3,
    },
    {
        type: 'hiper',
        patterns: [637095, 637612, 637599, 637609, 637568],
        cvcLength: 3,
    },
    {
        type: 'hipercard',
        patterns: [606282],
        cvcLength: 4,
    },
    // Add more card types with their respective patterns and CVC length
];

function detectCardType(cardNumber) {
    let matchedCardType = null;

    for (const cardType of cardTypes) {
        for (const pattern of cardType.patterns) {
            if (typeof pattern === 'number') {
                const patternStr = pattern.toString();
                if (cardNumber.startsWith(patternStr)) {
                    matchedCardType = cardType;
                    break;
                }
            } else if (Array.isArray(pattern)) {
                const [min, max] = pattern;
                if (cardNumber >= min.toString() && cardNumber <= max.toString()) {
                    matchedCardType = cardType;
                    break;
                }
            }
        }

        if (matchedCardType) {
            break;
        }
    }

    return matchedCardType ? matchedCardType.type : null;
}

function getCvcLength(cardType) {
    const matchedCardType = cardTypes.find((card) => card.type === cardType);
    return matchedCardType ? matchedCardType.cvcLength : null;
}

