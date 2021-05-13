const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			favoritos: [],
			details: {},
			imagenesPersonajes: [
				{
					url: "../img/4295e998fb34e7e46f7ab6283f1674251.jpg"
				}
			]
		},
		actions: {
			loadSomeData: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(resp => resp.json())
					.then(data => setStore({ personajes: data.results }))
					.catch(error => console.log(error));

				fetch("https://www.swapi.tech/api/planets/")
					.then(resp => resp.json())
					.then(data => setStore({ planetas: data.results }))
					.catch(error => console.log(error));
			},
			sDetails: url => {
				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ details: data.result.properties }))
					.catch(error => console.log(error));
			},
			findIndexInCharacters: name => {
				const store = getStore();
				var result = -1;
				store.personajes.some((item, i) => {
					if (item.name === name) {
						result = i;
						return true;
					}
				});
				store.planetas.some((item, i) => {
					if (item.name === name) {
						result = i;
						return true;
					}
				});
				return result;
			},
			addFavorite: (index, name, type) => {
				const store = getStore();
				const filter = store.favoritos.filter(item => item.name === name && item.type === type);
				if (filter.length === 0) {
					let newFavorite = {
						uid: index,
						name: name,
						type: type
					};
					const newFavoriteItemList = [...store.favoritos, newFavorite];
					setStore({ favoritos: newFavoriteItemList });
				}
			},

			deleteFavorite: name => {
				const store = getStore();
				const filter = store.favoritos.filter(item => item.name !== name);
				setStore({ favoritos: filter });
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
