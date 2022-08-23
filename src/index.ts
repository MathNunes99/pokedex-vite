import axios, { } from "axios";

const app = document.getElementById("app") as HTMLDivElement;

   async function obterDadosJson(nome: string){
      try {
         const resposta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nome}`, { responseType:"json" });
         const pokemon = resposta.data;

         const urlImagem = pokemon.sprites.front_default;         

         const img = document.createElement("img");         

         img.src = urlImagem;

         app.innerText = "";

         app.appendChild(img);

         console.log(pokemon);
      } catch(error){
         console.log(error);
      }
   }

const formulario = document.getElementById("formulario") as HTMLFormElement

const txtNome = document.getElementById("txtNome") as HTMLInputElement;

formulario.addEventListener("submit",(evt: SubmitEvent) => {
   evt.preventDefault();
   obterDadosJson(txtNome.value)
});
