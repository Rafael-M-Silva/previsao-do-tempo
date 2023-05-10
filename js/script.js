const app = document.querySelector(".app")
const btn = document.querySelector("#btn-search")
const key = "fe751092f5c44ed5cbe8048bcee7eaa1"

let dataScreen = (data) => {
  document.querySelector("#city").innerHTML = "Tempo em " + `${data.name}`
  document.querySelector("#temp").innerHTML = `${Math.floor(data.main.temp)}`+ "°C"
  document.querySelector("#desc").innerHTML = `${data.weather[0].description}`
  document.querySelector("#humi").innerHTML = `${data.main.humidity}`+"%"
  document.querySelector("#img").setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
}

// funcão async para fazer uma promise
async function getApi(city) {
  // await para aguardar a requisição e depois que pegar a resposta vamos continuar
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`)
  .then(response => response.json())

  // pegando os dados da requisição e passando para a função dataScreen para fazer a impressão na tela
  dataScreen(data)
} 

let handleClick = (e) => {
  // Tirando o comportamento padrão do botão type (submit)
  e.preventDefault()

  // pegando o valor do input
  let city = document.querySelector("#input-city").value

  // passando o valor do input para a funcão getApi
  getApi(city) 
}

btn.addEventListener("click", handleClick)
document.addEventListener("DOMContentLoaded", () => {
  getApi("São Paulo");
});
