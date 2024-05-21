document.addEventListener('DOMContentLoaded', () => {
    let filmCollection = new FilmWithDom();

    filmCollection.add(new FilmsWithId("Inception", "Christopher Nolan", "https://www.youtube.com/watch?v=YoHD9XEInc0", 2010, 829895144));
    filmCollection.add(new FilmsWithId("The Dark Knight", "Christopher Nolan", "https://www.youtube.com/watch?v=EXeTwQWrcwY", 2008, 1004558444));
    filmCollection.add(new FilmsWithId("Interstellar", "Christopher Nolan", "https://www.youtube.com/watch?v=zSWdZVtXT7E", 2014, 677471339));

    filmCollection.mount(document.getElementById("root"));
});