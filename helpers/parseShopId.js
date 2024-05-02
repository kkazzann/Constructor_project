const shopIds = {
    "3": "DE",
    "1": "CHDE",
    "8": "AT",
    "7": "FR",
    "21": "IT",
    "2": "UK",
    "10": "ES",
    "22": "PT",
    "12": "PL",
    "24": "HU",
    "17": "NL",
    "23": "SE",
    "25": "DK",
    "26": "CZ",
    "27": "FI",
    "28": "NO",
    "29": "SK",
};


export function parseShopId(products, data) {
    let countryToId = {}

    data.forEach((arr, index) => {
        const mainProductId = products[index].main_id

        for(let i in arr) {
            const obj = arr[i]
    
            if (obj.shop_id in shopIds) {
                countryToId[mainProductId] = {
                    ...countryToId[mainProductId],
                    [shopIds[obj.shop_id]]: obj.id
                }
            }
        }

        countryToId[mainProductId]["CHDE"] = mainProductId
        countryToId[mainProductId]["CHFR"] = mainProductId
    })



    return countryToId
}