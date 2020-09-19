"use strict";

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: () => {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
	
		while (personalMovieDB.count === '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
	},
	rememberMyFilms: () => {
		for (let index = 0; index < 2; index++) {
			const a = prompt('Один из последних просмотренных фильмов?', ''),
						b = prompt('На сколько оцените его?', '');
			
			if (a !== 'null' && b !== 'null' && a !== '' && b !== '' && a.length < 50) {
				personalMovieDB.movies[a] = b;
			} else {
				index--;
			}
		}
	},
	detectPersonalLevel: () => {
		if (personalMovieDB.count < 10) {
			console.log('Просмотрено довольно мало фильмов!');
		} else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
			console.log('Вы классический зритель!');
		} else if (personalMovieDB.count >= 30) {
			console.log('Вы киноман!');
		} else {
			console.log('Произошла ошибка!');
		}
	},
	showMyDB: (hidden) => {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: () => {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	writeYourGenres: () => {
		for (let i = 1; i <= 3; i++) {
			const genre = prompt(`Ваш любимый жанр под номером ${i}`);
			if (genre === '' || genre === null) {
				console.log('Error!');
				i--;
			} else {
				personalMovieDB.genres.push(genre);
			}
		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр ${i + 1} - это ${item}`);
		});
	}
};
