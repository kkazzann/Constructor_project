const formatPrice = {
    DE: (price) => {
        price = price.replace(".00", ",00")
        price = price.replace(".99", ",99")

        if (price.length === 8) {
            price = price.split("").toSpliced(2, 0, ".").join("")
        }

        if (price.length === 7) {
            price = price.split("").toSpliced(1, 0, ".").join("")
        }

        return price;
    },
    CHDE: (price) => {
        if (price.length === 8) {
            price = price.split("").toSpliced(2, 0, "'").join("")
        }

        if (price.length === 7) {
            price = price.split("").toSpliced(1, 0, "'").join("")
        }

        return price;
    },
    AT: (price) => {
        price = price.replace(".00", ",00")
        price = price.replace(".99", ",99")

        if (price.length === 8) {
            price = price.split("").toSpliced(2, 0, ".").join("")
        }

        if (price.length === 7) {
            price = price.split("").toSpliced(1, 0, ".").join("")
        }


        return price;
    },
    FR: (price) => {
        price = price.replace(".00", ",00")
        price = price.replace(".99", ",99")

        if (price.length === 8) {
            price = price.split("").toSpliced(2, 0, " ").join("")
        }

        if (price.length === 7) {
            price = price.split("").toSpliced(1, 0, " ").join("")
        }


        return price;
    },
    // NOT ACTIVE COUNTRY, FOR CHFR I RENDER CHDE PRICES
    CHFR: (price) => {
        if (price.length === 8) {
            price = price.split("").toSpliced(2, 0, "'").join("")
        }

        if (price.length === 7) {
            price = price.split("").toSpliced(1, 0, "'").join("")
        }

        return price;
    },
    IT: (price) => {
        price = price.replace(".00", ",00")
        price = price.replace(".99", ",99")

        if (price.length === 8) {
            price = price.split("").toSpliced(2, 0, ".").join("")
        }

        if (price.length === 7) {
            price = price.split("").toSpliced(1, 0, ".").join("")
        }

        return price;
    },
    UK: (price) => {
        
        if (price.length === 8) {
            price = price.split("").toSpliced(2, 0, ",").join("")
        }
        
        if (price.length === 7) {
            price = price.split("").toSpliced(1, 0, ",").join("")
        }
        
        return price
    },
    ES: (price) => {
        price = price.replace(".00", ",00")
        price = price.replace(".99", ",99")

        if (price.length === 8) {
            price = price.split("").toSpliced(2, 0, ".").join("")
        }

        if (price.length === 7) {
            price = price.split("").toSpliced(1, 0, ".").join("")
        }

        return price;
    },
    PT: (price) => {
        price = price.replace(".00", ",00")
        price = price.replace(".99", ",99")
        
        if (price.length === 8) {
            price = price.split("").toSpliced(2, 0, ".").join("")
        }

        if (price.length === 7) {
            price = price.split("").toSpliced(1, 0, ".").join("")
        }


        return price;
    },
    PL: (price) => {

        price = price.replace(".00", "")
        price = price.replace(".99", "")

        if (price.length === 5) {
            price = price.split("").toSpliced(2, 0, " ").join("")
        }

        if (price.length === 4) {
            price = price.split("").toSpliced(1, 0, " ").join("")
        }

        return price 
    },
    HU: (price) => {
        price = price.replace(".00", "")
        price = price.replace(".99", "")

        if (price.length === 7) {
            price = price.split("").toSpliced(1, 0, " ").toSpliced(5, 0, " ").join("")
        }

        if (price.length === 6) {
            price = price.split("").toSpliced(3, 0, " ").join("")
        }

        if (price.length === 5) {
            price = price.split("").toSpliced(2, 0, " ").join("")
        }

        if (price.length === 4) {
            price = price.split("").toSpliced(1, 0, " ").join("")
        }


        return price;
    },
    NL: (price) => {
        price = price.replace(".00", ",00")
        price = price.replace(".99", ",99")

        if (price.length === 8) {
            price = price.split("").toSpliced(2, 0, ".").join("")
        }

        if (price.length === 7) {
            price = price.split("").toSpliced(1, 0, ".").join("")
        }

        return price;
    },
    SE: (price) => {
        price = price.replace(".00", "")

        if (price.length === 5) {
            price = price.split("").toSpliced(2, 0, " ").join("")
        }

        if (price.length === 4) {
            price = price.split("").toSpliced(1, 0, " ").join("")
        }


        return price;
    },
    DK: (price) => {
        price = price.replace(".00", "")

        if (price.length === 5) {
            price = price.split("").toSpliced(2, 0, ".").join("")
        }

        if (price.length === 4) {
            price = price.split("").toSpliced(1, 0, ".").join("")
        }

        return price;
    },
    CZ: (price) => {
        price = price.replace(".00", "")

        if (price.length === 5) {
            price = price.split("").toSpliced(2, 0, " ").join("")
        }

        if (price.length === 4) {
            price = price.split("").toSpliced(1, 0, " ").join("")
        }


        return price;
    },
    FI: (price) => {
        price = price.replace(".00", ",00")
        price = price.replace(".99", ",99")

        if (price.length === 8) {
            price = price.split("").toSpliced(2, 0, " ").join("")
        }

        if (price.length === 7) {
            price = price.split("").toSpliced(1, 0, " ").join("")
        }

        return price;
    },
    NO: (price) => {
        price = price.replace(".00", "")

        if (price.length === 5) {
            price = price.split("").toSpliced(2, 0, ".").join("")
        }

        if (price.length === 4) {
            price = price.split("").toSpliced(1, 0, ".").join("")
        }


        return price 
    },
    SK: (price) => {
        price = price.replace(".00", ",00")
        price = price.replace(".99", ",99")

        if (price.length === 8) {
            price = price.split("").toSpliced(2, 0, " ").join("")
        }

        if (price.length === 7) {
            price = price.split("").toSpliced(1, 0, " ").join("")
        }

        return price;
    },
}

export function normalize(price, country) {
    return formatPrice[country](price)
}