function BuscarPokemon(ContenedorPokemon) {
  let InputId = `pokecarta${ContenedorPokemon}`;
  let NombrePokemon = document.getElementById(InputId).value.trim().toLowerCase();
  let UrlApi = `https://pokeapi.co/api/v2/pokemon/${NombrePokemon}`;

  fetch(UrlApi)
    .then(response => response.json())
    .then(DatosPokemon => MostrarPokemon(DatosPokemon, ContenedorPokemon))
    .catch(() => MostrarError(ContenedorPokemon));
}

function MostrarPokemon(DatosPokemon, ContenedorNumero){
  let InfoDivId = `pokeinfo${ContenedorNumero}`;
  let DivId = document.getElementById(InfoDivId);
  DivId.innerHTML = `
    <h2 style="font-size: 100px;" class="pk-name">${DatosPokemon.name.toUpperCase()}</h2>
    <img class="pk-img" src="${DatosPokemon.sprites.other["official-artwork"].front_default}">
    <p style="font-size: 60px;">Número : ${DatosPokemon.id}</p>
    <p style="font-size: 60px;">Altura : ${DatosPokemon.height/10}m</p>
    <p style="font-size: 60px;">Peso : ${DatosPokemon.weight/10}kg</p>
  `;
}

function MostrarError(ContenedorPokemon){
  let InfoDivId = `pokeinfo${ContenedorPokemon}`;
  let DivId = document.getElementById(InfoDivId);
  DivId.innerHTML = `
    <p> Intenta con un Nombre Válido : </p>
  `;
}

window.onload = function() {
  document.getElementById("pokecarta1").value = 150;
  BuscarPokemon(1);
  document.getElementById("pokecarta2").value = 25;
  BuscarPokemon(2);
}

