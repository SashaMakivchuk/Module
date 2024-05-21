
class Film{
    constructor(title,director,trailer,release,cash){
        this.title = title;
        this.director = director;
        this.trailer = trailer;
        this.release = release;
        this.cash = cash;
    }
}
class FilmToString extends Film{
    constructor(title,director,trailer,release,cash){
        super(title,director,trailer,release,cash);
    }
    toString(){
        return `${this.title} (${this.releaseYear}), directed by ${this.director}. cash earned${this.cash}`;
    }
}

