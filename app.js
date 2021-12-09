function inc (number) {
    const newDiv = document.createElement("div")
    if (number < 20) {
        number += 2
        newDiv.innerHTML += number.toString() + ", "
        inc(number)
    }
    document.querySelector("body").appendChild(newDiv)
}
a = 0;
inc(a)