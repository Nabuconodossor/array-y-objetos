//radiologia

let ratencion1 = {
  horadeatencion: "11:00",
  medicoEspecialista: "IGNACIO SCHULZ",
  paciente: "FRANCISCA ROJAS",
  rut: "9878782-1",
  prevision: "FONASA",
};

let ratencion2 = {
  horadeatencion: "11:30",
  medicoEspecialista: "FEDERICO SUBERCASEAUX",
  paciente: "PAMELA ESTRADA",
  rut: "15345241-3",
  prevision: "ISAPRE",
};
let ratencion3 = {
  horadeatencion: "15:00",
  medicoEspecialista: "FERNANDO WURTHZ",
  paciente: "ARMANDO LUNA",
  rut: "16445345-9",
  prevision: "ISAPRE",
};

let ratencion4 = {
  horadeatencion: "15:30",
  medicoEspecialista: "ANA MARIA GODOY",
  paciente: "MANUEL GODOY",
  rut: "17666419-0",
  prevision: "FONASA",
};

let ratencion5 = {
  horadeatencion: "16:00",
  medicoEspecialista: "PATRICIA SUAZO",
  paciente: "RAMON ULLOA",
  rut: "14989389-K",
  prevision: "FONASA",
};




const radiologia = [];

radiologia.push(ratencion1);
radiologia.push(ratencion2);
radiologia.push(ratencion3);
radiologia.push(ratencion4);
radiologia.push(ratencion5);

//requerimiento dia 2 radiologia

radiologia.pop()
radiologia.shift()



console.log(radiologia);

// radiologia.forEach(function(radiologia,index) {
//     console.log(`${index} : ${radiologia}`);
// })

document.write(`

    <div class="container">
    <h2>Tabla radiologia</h2>
    <p>primera atencion ${ratencion1.paciente} - ${ratencion1.prevision} | ultima atencion ${ratencion5.paciente} - ${ratencion5.prevision}</p>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">hora</th>
                <th scope="col">especialista</th>
                <th scope="col">paciente</th>
                <th scope="col">rut</th>
                <th scope="col">prevision</th>
                
            </tr>
        </thead>
        <tbody>

`);

radiologia.forEach((radiologia) => {
  document.write(`
    <tr>
        <th scope="row">${radiologia.horadeatencion}</th>
        <td>${radiologia.medicoEspecialista}</td>
        <td>${radiologia.paciente}</td>
        <td>@${radiologia.rut}</td>
        <td>@${radiologia.prevision}</td>
    </tr>

    `);
});

document.write(`

</tbody>
</table>
</div>

`);

//////////////////////////////////////////////////////////////////
//traumatologia

//objeto literal
let Tatencion1 = {
  horadeatencion: "8:00",
  medicoEspecialista: "MARIA PAZ ALTUZARRA",
  paciente: "PAULA SANCHEZ",
  rut: "15554774-5",
  prevision: "FONASA",
};

let Tatencion2 = {
  horadeatencion: "10:00",
  medicoEspecialista: "RAUL ARAYA",
  paciente: "ANGÉLICA NAVAS",
  rut: "15444147-9",
  prevision: "ISAPRE",
};

let Tatencion3 = {
  horadeatencion: "10:30",
  medicoEspecialista: "MARIA ARRIAGADA",
  paciente: "ANA KLAPP",
  rut: "17879423-9",
  prevision: "ISAPRE",
};

let Tatencion4 = {
  horadeatencion: "11:00",
  medicoEspecialista: "ALEJANDRO BADILLA",
  paciente: "FELIPE MARDONES",
  rut: "1547423-6",
  prevision: "ISAPRE",
};

let Tatencion5 = {
  horadeatencion: "11:30",
  medicoEspecialista: "CECILIA BUDNIK",
  paciente: "DIEGO MARRE",
  rut: "16554741-K",
  prevision: "FONASA",
};


//requerimiento dia 2

let tatencion6 ={
  horadeatencion: "09:00",
  medicoEspecialista: "RENE POBLETE",
  paciente: "ANA GELLONA",
  rut: "13123329-7",
  prevision: "ISAPRE",
};

let tatencion7 ={
  horadeatencion: "09:30",
  medicoEspecialista: "MARIA SOLAR",
  paciente: "RAMIRO ANDRADE",
  rut: "12221451-K",
  prevision: "FONASA",
};

let tatencion8 ={
  horadeatencion: "10:00",
  medicoEspecialista: "RAUL LOAIZA",
  paciente: "CARMEN ISLA",
  rut: "10112348-3",
  prevision: "ISAPRE",
};

let tatencion9 ={
  horadeatencion: "10:30",
  medicoEspecialista: "ANTONIO LARENAS",
  paciente: "PABLO LOAIZA",
  rut: "13453234-1",
  prevision: "ISAPRE",
};

let tatencion00 ={
  horadeatencion: "12:00",
  medicoEspecialista: "MATIAS ARAVENA",
  paciente: "SUSANA POBLETE",
  rut: "14345656-6",
  prevision: "FONASA",
};





//array de objetos
const traumatologia = [];

traumatologia.push(Tatencion1);
traumatologia.push(Tatencion2);
traumatologia.push(Tatencion3);
traumatologia.push(Tatencion4);
traumatologia.push(Tatencion5);

// push requerimiento dia 2
traumatologia.push(tatencion6);
traumatologia.push(tatencion7);
traumatologia.push(tatencion8);
traumatologia.push(tatencion9);
traumatologia.push(tatencion00);




console.log(traumatologia);

// traumatologia.forEach(function(traumatologia,index) {
//     console.log(`${index} : ${traumatologia}`);
// })

document.write(`
   
    <div class="container">
    <h2>Tabla traumatologia</h2>
    <p>primera atencion ${Tatencion1.paciente} - ${Tatencion1.prevision} | ultima atencion ${Tatencion5.paciente} - ${Tatencion5.prevision}</p>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">hora</th>
                <th scope="col">especialista</th>
                <th scope="col">paciente</th>
                <th scope="col">rut</th>
                <th scope="col">prevision</th>
                
            </tr>
        </thead>
        <tbody>

`);

traumatologia.forEach((traumatologia) => {
  document.write(`
    <tr>
        <th scope="row">${traumatologia.horadeatencion}</th>
        <td>${traumatologia.medicoEspecialista}</td>
        <td>${traumatologia.paciente}</td>
        <td>${traumatologia.rut}</td>
        <td>${traumatologia.prevision}</td>

    </tr>

    `);
});

document.write(`

</tbody>
</table>
</div>

`);

///////////////////////////////////////////////////////////////////////////////////

// dental

let Datencion1 = {
  horadeatencion: "8:30",
  medicoEspecialista: "ANDREA ZUÑIGA",
  paciente: "MARCELA RETAMAL",
  rut: "11123425-6",
  prevision: "ISAPRE",
};

let Datencion2 = {
  horadeatencion: "11:00",
  medicoEspecialista: "MARIA PIA ZAÑARTU",
  paciente: "ANGEL MUÑOZ",
  rut: "9878789-2",
  prevision: "ISAPRE",
};

let Datencion3 = {
  horadeatencion: "11:30",
  medicoEspecialista: "SCARLETT WITTING",
  paciente: "MARIO KAST",
  rut: "7998789-5",
  prevision: "FONASA",
};

let Datencion4 = {
  horadeatencion: "13:00",
  medicoEspecialista: "FRANCISCO VON TEUBER",
  paciente: "KARIN FERNANDEZ",
  rut: "18887662-K",
  prevision: "FONASA",
};

let Datencion5 = {
  horadeatencion: "13:30",
  medicoEspecialista: "EDUARDO VIÑUELA",
  paciente: "HUGO SANCHEZ",
  rut: "17665461-4",
  prevision: "FONASA",
};

const dental = [];

dental.push(Datencion1);
dental.push(Datencion2);
dental.push(Datencion3);
dental.push(Datencion4);
dental.push(Datencion5);

console.log(dental);

// dental.forEach(function(dental,index) {
//     console.log(`${horadeatencion} : ${dental}`);
// })

/////////////////////////////////////////////////////////////////////////////////

//tabla dental
document.write(`
    <div class="container">
    <h2>Tabla dental</h2>
    <p>primera atencion ${Datencion1.paciente} - ${Datencion1.prevision} | ultima atencion ${Datencion5.paciente} - ${Datencion5.prevision}</p>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">hora</th>
                <th scope="col">especialista</th>
                <th scope="col">paciente</th>
                <th scope="col">rut</th>
                <th scope="col">prevision</th>
                
            </tr>
            especificaciones dia 2
          
        </thead>
        <tbody>

`);

dental.forEach((dental) => {
  document.write(`
    <tr>
        <th scope="row">${dental.horadeatencion}</th>
        <td>${dental.medicoEspecialista}</td>
        <td>${dental.paciente}</td>
        <td>${dental.rut}</td>
        <td>${dental.prevision}</td>
    </tr>

    <p>${dental.horadeatencion} - ${dental.medicoEspecialista} - ${dental.paciente} - ${dental.rut} - ${dental.prevision}</p>



    `);
});

document.write(`

</tbody>
</table>
</div>

`);


// requerimiento dia 2 

const userList = [];

console.log(userList);


userList.push(ratencion1.paciente);
userList.push(ratencion2.paciente);
userList.push(ratencion3.paciente);
userList.push(ratencion4.paciente);
userList.push(ratencion5.paciente);
userList.push(Tatencion1.paciente);
userList.push(Tatencion2.paciente);
userList.push(Tatencion3.paciente);
userList.push(Tatencion4.paciente);
userList.push(Tatencion5.paciente);
userList.push(tatencion6.paciente);
userList.push(tatencion7.paciente);
userList.push(tatencion8.paciente);
userList.push(tatencion9.paciente);
userList.push(tatencion00.paciente);
userList.push(Datencion1.paciente);
userList.push(Datencion2.paciente);
userList.push(Datencion3.paciente);
userList.push(Datencion4.paciente);
userList.push(Datencion5.paciente);

document.write(`
    <p></p>
    <div class="container">
    Requerimiento dia 2
    <p>Lista de pacientes</p>
    <table class="table">

`);

userList.forEach((userList) => {
  document.write(`


    <p>${userList} </p>



    `);
});

document.write(`

</div>

`);

