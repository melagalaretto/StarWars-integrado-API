const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			favoritos: [],
			details: {},
			imagenesPersonajes: [
				{
					url:
						"https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop1x1.320w.jpg"
				},
				{
					url:
						"https://www.hollywoodmegastore.com/pub/media/catalog/product/cache/c9e0b0ef589f3508e5ba515cde53c5ff/2/9/2973_c3po_swix_34.jpg"
				},
				{
					url: "https://images-na.ssl-images-amazon.com/images/I/61srwGulapL._AC_SX522_.jpg"
				},
				{
					url: "https://media.vandalsports.com/i/1080x1080/11-2020/202011910389_1.jpg"
				},
				{
					url:
						"https://www.tuenlinea.com/wp-content/uploads/2018/08/Fallece-Carrie-Fisher-Princesa-Leia-Organa-de-Star-Wars.jpg"
				},
				{
					url: "https://i.pinimg.com/originals/1f/fb/93/1ffb93a66d8f80f27eafd56fa97c732c.jpg"
				},
				{
					url: "https://i.pinimg.com/originals/2b/bb/71/2bbb712405c574c6ce78730e00464a8e.jpg"
				},
				{
					url: "https://www.renderhub.com/ardera/r5-d4-astromech-droid/r5-d4-astromech-droid-01.jpg"
				},
				{
					url: "https://comicvine1.cbsistatic.com/uploads/scale_medium/14/145984/4902632-8136336329-biggs.jpg"
				},
				{
					url:
						"https://spoiler.bolavip.com/__export/1604585512125/sites/bolavip/img/2020/11/05/00-44_crop1604585147413.jpg_1998527180.jpg"
				}
			],
			imagenesPlanetas: [
				{
					url: "https://img.unocero.com/2020/01/nasa-descubre-planeta-tatooine.jpg"
				},
				{
					url: "https://i.pinimg.com/originals/1d/c4/ec/1dc4ec9eb78570ccc4d995dc72939fbd.jpg"
				},
				{
					url: "https://i.pinimg.com/originals/b6/c6/f1/b6c6f13855b066d132f5b7ab9cd12224.jpg"
				},
				{
					url: "https://pm1.narvii.com/6592/17fa9c214dad4ac1671fb301286aa9095e3a5dab_hq.jpg"
				},
				{
					url:
						"https://www.technobuffalo.com/sites/technobuffalo.com/files/styles/large/public/wp/2016/04/dagobah-002.jpg"
				},
				{
					url: "https://i.redd.it/olnyltcj0h931.png"
				},
				{
					url: "https://i.pinimg.com/originals/a4/b0/3d/a4b03dad3f1d22a1e76c742051cc17b4.jpg"
				},
				{
					url: "https://allgamersin.com/wp-content/uploads/2017/06/Theet.jpg"
				},
				{
					url: "https://i.pinimg.com/originals/3f/7e/89/3f7e893efe4cc037c20b1f742a0da2ce.jpg"
				},
				{
					url: "https://pbs.twimg.com/media/D5t_cgCWkAAQLhV.jpg"
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
