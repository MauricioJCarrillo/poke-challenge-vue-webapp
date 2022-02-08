const { createApp } = Vue;

const URL = 'https://pokeapi.co/api/v2/';

const app = createApp({
	data() {
		return {
			results:[],
			personajes:[],
			url:[],
			pokemon:[],
			imagen:[],
			habilidad1:[],
			habilidad2:[],
			}
	},
	methods: {
		async getData() {
			try {
				let num_pokemons = document.getElementById('num_pokemons');
				let num_pokem = Number(num_pokemons.value);

				const data = await fetch(`${URL}pokemon?limit=${num_pokem}&offset=0`);
				const pokemones = await data.json();
				this.pokemones = pokemones;

				const results = pokemones.results;
				this.results = results;
			}
			catch (error) {
				console.error(error);
			}
		},
		async getData1() {
			try {

				let id_pok = document.getElementById('id_pok');
				let id = Number(id_pok.value);

				const data1 = await fetch(`${URL}pokemon/${id}`);
				const pokemon = await data1.json();
				this.pokemon = pokemon;

				const habilidad1 = pokemon.abilities[0].ability;
				this.habilidad1 = habilidad1;

				const habilidad2 = pokemon.abilities[1].ability;
				this.habilidad2 = habilidad2;

				const imagen = pokemon.sprites.front_default;
				this.imagen = imagen;

				console.log(pokemon);
				console.log(imagen);
				console.log(habilidad1);
				console.log(habilidad2);
			}
			catch (error) {
				console.error(error);
			}
		}
    }
});

app.mount('#root');