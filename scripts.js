const button = document.getElementById('convert-button')
const select = document.getElementById("currency-select")

const dolar = 5.06
const euro = 5.05

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realvaluetext = document.getElementById('real-value-text')
    const currencyvaluetext = document.getElementById('currency-value-text')


    realvaluetext.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais)

    if (select.value === "US$ Dolar americano") {
        currencyvaluetext.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",

        }).format(inputReais / dolar)
    }
    if (select.value === "€ Euro") {
        currencyvaluetext.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro)
    }
}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (select.value === 'US$ Dolar americano') {
        currencyName.innerHTML = "Dolar americano"
        currencyImg.src = "eua.png"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "EURO"
        currencyImg.src = "euro.png"
    }
    //    console.log(select.value)

    convertValues()
}
button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)
