const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.querySelector("input[name='character-id']").value
    charactersAPI.getOneRegister(id)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const id = document.querySelector("input[name='character-id-delete']").value
    charactersAPI.deleteOneRegister(id)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    const name = document.querySelector("#new-character-form input[name='name']").value
    const occupation = document.querySelector("#new-character-form  input[name='occupation']").value
    const weapon = document.querySelector("#new-character-form  input[name='weapon']").value
    const itsCartoon = document.querySelector("#new-character-form  input[name='cartoon']").value
    let cartoon;
    if (itsCartoon === "on") cartoon = true;
    else cartoon = false;
    charactersAPI.createOneRegister({name, occupation, weapon, cartoon})
  });
});
