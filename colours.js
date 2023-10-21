// formatted: primary, secondary, accent
const grey = ["rgb(29, 29, 29)", "rgb(240, 240, 240)", "rgb(59, 59, 59)"]
const blue = ["rgb(0, 28, 85)", "rgb(240, 240, 240)", "rgb(13, 73, 168)"]
const green = ["rgb(60, 90, 20)", "rgb(0, 0, 0)", "rgb(113, 179, 64)"]
const red = ["rgb(125, 3, 11)", "rgb(240, 240, 240)", "rgb(229, 15, 36)"]
const purple = ["rgb(83, 47, 97)", "rgb(240, 240, 240)", "rgb(153, 88, 184)"]

function changeColour() {
    // get current colour
    let currentColour = document.getElementById("themeSelect").value
    switch (currentColour) {
        case "grey":
            currentColour = grey
            break;
        case "blue":
            currentColour = blue
            break;
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
    const primary_elems = document.querySelectorAll('[colour="primary"]')
    for (let i = 0; i < primary_elems.length; i++) {
        primary_elems[i].style.backgroundColor = (currentColour[0])
    }

    // secondary elements
    const secondary_elems = document.querySelectorAll('[colour="secondary"]')
    for (let i = 0; i < secondary_elems.length; i++) {
        secondary_elems[i].style.color = (currentColour[1])
    }

    // accent elements
    const accent_elems = document.querySelectorAll('[colour="accent"]')
    for (let i = 0; i < accent_elems.length; i++) {
        accent_elems[i].style.backgroundColor = (currentColour[2])
    }

    // main content
    document.getElementById("mainContent").style.backgroundImage = ("linear-gradient(" + currentColour[0] + "," + currentColour[2] + ")")
}
