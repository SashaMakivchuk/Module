
let IdCount=0;

class FilmsWithId extends FilmToString {
    constructor(title, director, trailer, release, cash) {
        super(title, director, trailer, release, cash);
        this._id = IdCount++;
    }

    get id() {
        return this._id;
    }
}
class FilmCollection {
    constructor() {
        this.films = [];
    }

    get count() {
        return this.films.length;
    }

    add(film) {
        if (!(film instanceof FilmsWithId))
            throw 'No film like that';
        if (!(this.films.some(el => el.id == film.id)))
            this.films.push(film);
    }

    getById(id) {
        return this.films.find(film => film.id == id);
    }

    getAll() {
        return [...this.films];
    }

    delete(id) {
        let filmId = this.films.findIndex(film => film.id == id);
        if (filmId == -1)
            throw "NotFound";
        this.films.splice(filmId, 1);
    }

    sortByCash() {
        return this.films.sort((b, a) => b.cash - a.cash);
    }
    sortByCashDescending() {
        this.films.sort((a, b) => b.cash - a.cash);
    }
}