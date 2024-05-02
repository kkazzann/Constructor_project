import endpoint from "./endpoint.js";







export async function fetchHeader({type, id, country}) {
    try {
        const response = await fetch(`${endpoint.belianiUs}:7777/header/?country=${country}&id=${id}&type=${type}`)
        const header = await response.json()
        return header
    } catch (error) {
        console.log(error);
    }
}