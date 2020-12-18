const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault()
    const characters = charactersAPI.getFullList()
    showCharacters(characters)
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault()
    const id = document.querySelector("input[name='character-id']").value
    const characters = charactersAPI.getOneRegister(id)
    showCharacters(characters)
  });

  document.getElementById('delete-one').addEventListener('click', event.preventDefault(), function (event) {
    event.preventDefault()
    const id = document.querySelector("input[name='character-id-delete']").value
    charactersAPI.deleteOneRegister(id)
  });

  document.getElementById('send-data-create').addEventListener('click',  function (event) {
    event.preventDefault()
    const id = document.querySelector("#edit-character-form input[name='chr-id']").value
    const name = document.querySelector("#edit-character-form input[name='name']").value
    const occupation = document.querySelector("#edit-character-form  input[name='occupation']").value
    const weapon = document.querySelector("#edit-character-form  input[name='weapon']").value
    const itsCartoon = document.querySelector("#edit-character-form  input[name='cartoon']").checked;
    let cartoon;
    if (itsCartoon === true) cartoon = true;
    else cartoon = false;
    const dataObject = { name, occupation, weapon, cartoon }
    for (key in dataObject){
      if (dataObject[key] === "") delete dataObject[key]
      console.log(dataObject[key])
    };
    const characters = charactersAPI.updateOneRegister(id, dataObject)
    showCharacters(characters)
  });

  document.getElementById('send-data').addEventListener('click', function (event) {
    event.preventDefault()
    const name = document.querySelector("#new-character-form input[name='name']").value
    const occupation = document.querySelector("#new-character-form  input[name='occupation']").value
    const weapon = document.querySelector("#new-character-form  input[name='weapon']").value
    const itsCartoon = document.querySelector("#new-character-form  input[name='cartoon']").checked;
    let cartoon;
    if (itsCartoon === true) cartoon = true;
    else cartoon = false;
    const characters = charactersAPI.createOneRegister({ name, occupation, weapon, cartoon })
    showCharacters(characters)
  });
});


const  showCharacters = async (characters) => {
  const container = document.querySelector(".characters-container")
  container.innerHTML = "";
  const data = await characters;
console.log(data)
  data.forEach( character => {
    container.innerHTML +=
          `<div class="character-info">
          <div class="name">Character Name
          ${character.name}
          </div>
          <div class="occupation">Character Occupation
          ${character.occupation}
          </div>
          <div class="cartoon">Is a Cartoon?
          ${character.cartoon}
          </div>
          <div class="weapon">Character Weapon
          ${character.weapon}
          </div>
          <div class="id">Character Id
          ${character.id}
          </div>
        </div>`
  }); 
}
