import origins from "../data/templates/origins.js"

export function parseLinkToCountry(data) {
    let links = {}
    const originCountries = Object.keys(origins)

    try {
        for(let i in data) {
            const link = data[i]
            
            Object.values(origins).forEach((origin, index) => {
                if (link.includes(origin)) {
                    links[originCountries[index]] = (new URL(link).origin + new URL(link).pathname).replace(".desc", ".html")
                }
            })
        }
    
        links["CHFR"] = "https://www.beliani.ch/" + new URL(links["FR"]).pathname
        return links
    } catch (error) {
        throw new Error("Parse product link failed: " + error)
    }
  }