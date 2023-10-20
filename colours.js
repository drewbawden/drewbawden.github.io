// formatted: primary, secondary, accent
const green = ["rgb(60, 90, 20)", "rgb(240, 240, 240)", "rgb(113, 179, 64)"]
const red = ["rgb(145, 23, 31)", "rgb(240, 240, 240)", "rgb(249, 35, 56)"]
const purple = ["rgb(83, 47, 97)", "rgb(240, 240, 240)", "rgb(153, 88, 184)"]

function changeColour() {
    // get current colour
    let currentColour = document.getElementById("themeSelect").value
    switch (currentColour) {
        case "green":
            currentColour = green
            break;
        case "red":
            currentColour = red
            break;
        case "purple":
            currentColour = purple
            break;
        }

    // primary elements
    const primary_elems = document.querySelectorAll('[data-colour="primary"]')
    for (let i = 0; i < primary_elems.length; i++) {
        primary_elems[i].style.backgroundColor = (currentColour[0])
    }
    // secondary elements
    const secondary_elems = document.querySelectorAll('[data-colour="secondary"]')
    for (let i = 0; i < secondary_elems.length; i++) {
        secondary_elems[i].style.backgroundColor = (currentColour[1])
    }
    // accent elements
    const accent_elems = document.querySelectorAll('[data-colour="accent"]')
    for (let i = 0; i < accent_elems.length; i++) {
        accent_elems[i].style.backgroundColor = (currentColour[2])
    }
}
