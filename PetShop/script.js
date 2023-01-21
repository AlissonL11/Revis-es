var pets = [];

function addPet() {
   event.preventDefault(); //não deixa a tela atualizar
   let pet = {
        "petName": document.getElementById('fName').value,
        "petBreed": document.getElementById('fBreed').value,
        "petOwner":document.getElementById('fOwner').value,
        "petPhone":document.getElementById('fPhone').value
    
   }
   
   document.getElementById('fName').value="";
   document.getElementById('fBreed').value="";
   document.getElementById('fOwner').value="";
   document.getElementById('fPhone').value="";

   pets.push(pet);   
   renderTable();
}

function renderTable() {
    
    let table = document.getElementById('dataTable');
    table.innerHTML = `<tr>
        <th> ID</th>
        <th> NOME DO PET</th>
        <th> RAÇA</th>
        <th> DONO DO PET</th>
        <th> TELEFONE</th>
        <th> REMOVER</th>
    </tr>`

    for(let i = 0; i < pets.length; i++) {

        table.innerHTML = table.innerHTML + `<td> ${ i } </td>
        <td> ${pets[i].petName}</td>
        <td> ${pets[i].petBreed}</td>
        <td> ${pets[i].petOwner}</td>
        <td> ${pets[i].petPhone}</td>
        <td><img src="remove.png" width="25px" onclick="removePet(${i})"></td>`

    }
}

function removePet(index) {
    pets.splice(index,1);
    renderTable();
}