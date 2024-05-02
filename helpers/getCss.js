






export async function getCss(type) {
    if (type === "newsletter") {
        return await fetch(`${window.location.origin}/assets/${type}.css`).then(data => data.text())
    }

    if (type === "landing") {
        return await fetch(`${window.location.origin}/assets/${type}.css`).then(data => data.text())
    }
}

export function attachCss(state) {
    const link = document.createElement("link")
    link.rel = "stylesheet" 

    if (state.template === "newsletter") {
        link.href = `./assets/${state.template}.css`
        link.id = `newsletterCss`
        document.querySelector("#landingCss")?.remove()

        document.querySelector('head').append(link)
    }

    if (state.template === "landing") {
        link.href = `./assets/${state.template}.css`
        link.id = `landingCss`
        document.querySelector("#newsletterCss")?.remove()

        document.querySelector('head').append(link)
    }

}