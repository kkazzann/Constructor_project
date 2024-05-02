export function incrementId(id, countriesOrdering) {
    const countries = countriesOrdering ? countriesOrdering : [
      "CHDE",
      "CHFR",
      "AT",
      "CZ",
      "DE",
      "DK",
      "FI",
      "FR",
      "HU",
      "IT",
      "NL",
      "NO",
      "PL",
      "PT",
      "SE",
      "SK",
      "ES",
      "UK"
    ]

    const relativeIdToCountires = {}
    
    countries.forEach(country => {
        relativeIdToCountires[country] = Number(id)
        id++
    })

    return relativeIdToCountires
}