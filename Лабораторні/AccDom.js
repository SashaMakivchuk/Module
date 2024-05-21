class AccountWithDom extends Accounting{
    AccToHTML(acc){
        return`
        <tr>
            <td>
                ${acc.id}
            </td>
            <td>
                ${acc.code}
            </td>
            <td>
                ${acc.firstName}
            </td>
            <td>
                ${acc.lastName}
            </td>
            <td>
                ${acc.position}
            </td>
            <td>
                ${acc.salary}
            </td>
            <td>
                ${acc.numberOfChildren}
            </td>
            <td>
                ${acc.experiance}
            </td>
            <td>
                <img
                    src="${acc.image}"
                    alt="${acc.firstName} ${acc.lastName}"
                    class="avatar"
                />
            </td>
            <td> 
                <button onclick="DeleteAcc(${acc.id})">
                    Delete
                </button>
            </td>
            <td> 
                <button onclick="StartEditAcc(${acc.id})">
                    Edit
                </button>
            </td>
        </tr>
        `  
    }
    AccTableToHTML(){
        let rows ="";
        for(let acc of this.getAll()){
            rows+=this.AccToHTML(acc);
        }
        return `
            <table>
                <tr>
                    <th>
                        Id
                    </th>
                    <th>
                    Code
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Last Name
                    </th>
                    <th>
                        Position
                    </th>
                    <th>
                        Salary
                    </th>
                    <th>
                        Children
                    </th>
                    <th>
                        Experiance
                    </th>
                    <th>
                        Image
                    </th>
                    <th colspan="2">
                        Actions
                    </th>
                </tr>
                ${rows}
            </table>
            <button type="button" onclick="ShowAddAcc()">
                Add user
            </button>
            `;
    }
    addFormToHTML() {
        return ` 
            <div id="add">
                <form name="addForm" method="post" action="#">
                    <h3> Add User </h3>
                    <input name="id" type="hidden">
                    <input name="Code" placeholder="Code">
                    <input name="FirstName" placeholder="FirstName">
                    <input name="LastName" placeholder="LastName"> 
                    <input name="position" placeholder="position">
                    <input name="salary" placeholder="salary">
                    <input name="Children" placeholder="Children">
                    <input name="experiance" placeholder="experiance">
                    <input name="image" placeholder="avatar url">
                    <button type="button" onclick="AddNewAcc()">
                        Save
                    </button>
                </form>
            </div>
        `;
    }
    editFormToHTML() {
        return ` 
            <div id="edit">
                <form name="editForm" method="post" action="#">
                    <h3> Edit User </h3>
                    <input name="id" type="hidden">
                    <input name="Code" placeholder="Code">
                    <input name="FirstName" placeholder="FirstName">
                    <input name="LastName" placeholder="LastName"> 
                    <input name="position" placeholder="position">
                    <input name="salary" placeholder="salary">
                    <input name="Children" placeholder="Children">
                    <input name="experiance" placeholder="experiance">
                    <input name="image" placeholder="avatar url">
                    <button type="button" onclick="editAcc()">
                        Save
                    </button>
                </form>
            </div>
        `;
    }
    toHTML() {
        return this.AccTableToHTML() + this.addFormToHTML() + this.editFormToHTML();
    }
    mount(parrent) {
        this._parrent = parrent;
        this.render();
        this.addEventListners();
    }

    render() {
        this._parrent.innerHTML = this.toHTML();
    }

    addEventListners() {
        document.addEventListener("deleteAcc", event => {
            super.delete(event.detail.id);
            this.render();
        });

        document.addEventListener("addAcc", event => {
            super.add(
                new AccountWithId(
                    event.detail.id,
                    event.detail.code,
                    event.detail.firstName,
                    event.detail.lastName,
                    event.detail.position,
                    event.detail.salary,
                    event.detail.numberOfChildren,
                    event.detail.experiance,
                    event.detail.image,
                )
            );
            this.render();
        });
    
        document.addEventListener("editAcc", event => {
            try {
                super.update(event.detail.id, event.detail);
                this.render();
            } catch (error) {
                console.log(error);
                alert(error);
            }
        });
    }
}
    function DeleteAcc(id) {
        let deleteAccEvent = new CustomEvent("deleteAcc", { detail: { id } });
        document.dispatchEvent(deleteAccEvent);
    }
    
    function AddNewAcc() {
        const code = document.getElementsByName("Code")[0].value;
        const firstName = document.getElementsByName("FirstName")[0].value;
        const lastName = document.getElementsByName("LastName")[0].value;
        const image = document.getElementsByName("image")[0].value;
        const position = document.getElementsByName("position")[0].value;
        const salary = document.getElementsByName("salary")[0].value;
        const numberOfChildren = document.getElementsByName("Children")[0].value;
        const experiance = document.getElementsByName("experiance")[0].value;
        let addAccEvent = new CustomEvent("addAcc", {
            detail: {
                code,
                firstName,
                lastName,
                position,
                salary,
                numberOfChildren,
                experiance,
                image
            }
        });
        document.dispatchEvent(addAccEvent);
    }
    function editAcc() {
        const id = document.getElementsByName("id")[1].value;
        const code = document.getElementsByName("Code")[1].value;
        const firstName = document.getElementsByName("FirstName")[1].value;
        const lastName = document.getElementsByName("LastName")[1].value;
        const image = document.getElementsByName("image")[1].value;
        const position = document.getElementsByName("position")[1].value;
        const salary = document.getElementsByName("salary")[1].value;
        const numberOfChildren = document.getElementsByName("Children")[1].value;
        const experiance = document.getElementsByName("experiance")[1].value;
        let editAccEvent = new CustomEvent("editAcc", {
            detail: {
                id,
                code,
                firstName,
                lastName,
                position,
                salary,
                numberOfChildren,
                experiance,
                image
            }
        });
        document.dispatchEvent(editAccEvent);
        }
    function StartEditAcc(id) {
        document.getElementById("edit").style.display = "block";
        try {
            let acc = getAccInstance().getById(id);
            document.getElementsByName("id")[1].value = acc.id;
            document.getElementsByName("Code")[1].value = acc.code;
            document.getElementsByName("FirstName")[1].value = acc.firstName;
            document.getElementsByName("LastName")[1].value = acc.lastName
            document.getElementsByName("image")[1].value = acc.image
            document.getElementsByName("position")[1].value = acc.position
            document.getElementsByName("salary")[1].value = acc.salary
            document.getElementsByName("Children")[1].value = acc.numberOfChildren
            document.getElementsByName("experiance")[1].value = acc.experiance;
        } catch (error) {
            console.log(error);
            alert(error);
        }
    }
    
        function ShowAddAcc() {
            document.getElementById("add").style.display = "block";
        }
    


