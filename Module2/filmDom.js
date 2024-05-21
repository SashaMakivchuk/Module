class FilmWithDom extends FilmCollection {
    FilmsToHTML(film) {
        return `
            <tr>
                <td>${film.id}</td>
                <td>${film.title}</td>
                <td>${film.director}</td>
                <td><a href="${film.trailer}" target="_blank">Trailer</a></td>
                <td>${film.release}</td>
                <td>${film.cash}</td>
                <td><button onclick="DeleteFilm(${film.id})">Delete</button></td>
            </tr>
        `;
    }

    FilmsTableToHTML() {
        let rows = "";
        for (let film of this.getAll()) {
            rows += this.FilmsToHTML(film);
        }
        return `
            <table>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Trailer</th>
                    <th>Release</th>
                    <th>Cash</th>
                    <th>Action</th>
                </tr>
                ${rows}
            </table>
            <button type="button" onclick="ShowAddFilm()">Add Film</button>
        `;
    }

    addFormToHTML() {
        return `
            <div id="add" style="display:none;">
                <form name="addForm" method="post" action="#">
                    <h3>Add Film</h3>
                    <input name="Title" placeholder="Title">
                    <input name="Director" placeholder="Director">
                    <input name="Trailer" placeholder="Trailer">
                    <input name="Release" placeholder="Release">
                    <input name="Cash" placeholder="Cash">
                    <button type="button" onclick="AddNewFilm()">Save</button>
                </form>
            </div>
        `;
    }

    toHTML() {
        return this.FilmsTableToHTML() + this.addFormToHTML();
    }

    mount(parent) {
        this._parent = parent;
        this.render();
        this.addEventListeners();
    }

    render() {
        this.sortByCashDescending();
        this._parent.innerHTML = this.toHTML();
    }

    addEventListeners() {
        document.addEventListener("deleteFilm", event => {
            this.delete(event.detail.id);
            this.render();
        });
        document.addEventListener("addFilm", event => {
            this.add(
                new FilmsWithId(
                    event.detail.title,
                    event.detail.director,
                    event.detail.trailer,
                    event.detail.release,
                    event.detail.cash
                )
            );
            this.render();
        });
        
    }
}

function DeleteFilm(id) {
    let deleteFilmEvent = new CustomEvent("deleteFilm", { detail: { id } });
    document.dispatchEvent(deleteFilmEvent);
}
function AddNewFilm() {
    const title = document.getElementsByName("Title")[0].value;
    const director = document.getElementsByName("Director")[0].value;
    const trailer = document.getElementsByName("Trailer")[0].value;
    const release = document.getElementsByName("Release")[0].value;
    const cash = document.getElementsByName("Cash")[0].value;

    let addFilmEvent = new CustomEvent("addFilm", {
        detail: { 
            title,
            director,
            trailer,
            release,
            cash }
    });
    document.dispatchEvent(addFilmEvent);
}
function ShowAddFilm() {
    document.getElementById("add").style.display = "block";
}
