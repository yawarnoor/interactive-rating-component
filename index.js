const maincontainer = document.querySelector(".main-container")
const thankyou = document.querySelector(".thank-you")

const submitbtn = document.getElementById("submit")
const ratebtn = document.getElementById("rate")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

submitbtn.addEventListener("click", () => {
    thankyou.classList.remove("hidden")
    maincontainer.classList.add("hidden")
})

ratebtn.addEventListener("click", () => {
    thankyou.classList.add("hidden")
    maincontainer.classList.remove("hidden")
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})
