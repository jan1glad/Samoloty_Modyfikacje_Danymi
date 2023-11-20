let sections = [];

let fleetOfAirplanes = [];

const typesOfPlane = ["Samolot","Boeing","Airbus","Cessna","Szybowiec","F16"];

let Samolot = {"Nazwa":"Samolot","Zastosowanie":"Lot",
"IlośćPasażerów":100,"Speed":500,"Cena":1000000};

const Boeing = Object.create(Samolot);
Boeing.Nazwa = "Boeing";
Boeing.Zastosowanie = "Przewóz pasażerów";
Boeing.IlośćPasażerów = 370;
Boeing.Speed = 860;
Boeing.Cena = 25000000;

const Airbus = Object.create(Samolot);
Airbus.Nazwa = "Airbus";
Airbus.Zastosowanie = "Przewóz towarów";
Airbus.IlośćPasażerów = 0;
Airbus.Speed = 720;
Airbus.Cena = 30000000;

const Cessna = Object.create(Samolot);
Cessna.Nazwa = "Cessna";
Cessna.Zastosowanie = "Turystyka";
Cessna.IlośćPasażerów = 3;
Cessna.Speed = 390;
Cessna.Cena = 1500000;

const Szybowiec = Object.create(Samolot);
Szybowiec.Nazwa = "Szybowiec";
Szybowiec.Zastosowanie = "Hobby";
Szybowiec.IlośćPasażerów = 1;
Szybowiec.Speed = 200;
Szybowiec.Cena = 800000;

const F16 = Object.create(Samolot);
F16.Nazwa = "F16";
F16.Zastosowanie = "Wojsko";
F16.IlośćPasażerów = 2;
F16.Speed = 1600;
F16.Cena = 150000000;

const airPlanes = {
    "Samolot":Samolot,
    "Boeing":Boeing,
    "Airbus":Airbus,
    "Cessna":Cessna,
    "Szybowiec":Szybowiec,
    "F16":F16
} 

function start(){
    sections = document.getElementsByTagName('section');
    selectAirplane();
    showHide(0);
}
function showHide(nr){
    for (let i=1; i<sections.length; i++){
    sections[i].hidden = true;
    }
    sections[nr].hidden = false
    if(nr === 3){ countParameters();}
   }

function selectAirplane(){
    let selectPlane = document.getElementById("selectPlane");
    for(let i=0;i<typesOfPlane.length;i++){
        let option = document.createElement('option');
        option.innerHTML = option.value = typesOfPlane[i];
        selectPlane.appendChild(option);
    }
}

function addPlane(){
    let newValue = document.getElementById("selectPlane").value;
    let planeNew = airPlanes[newValue];
    fleetOfAirplanes.push(planeNew);
    let table = document.getElementById("tableOfPlanes");
    let row = table.insertRow(-1);
    let cell0 = row.insertCell(0);
    cell0.innerHTML = planeNew.Nazwa;
    let cell1 = row.insertCell(1);
    cell1.innerHTML = planeNew.Zastosowanie;
    let cell2 = row.insertCell(2);
    cell2.innerHTML = planeNew.IlośćPasażerów;
    let cell3 = row.insertCell(3);
    cell3.innerHTML = planeNew.Speed;
    let cell4 = row.insertCell(4);
    cell4.innerHTML = planeNew.Cena;


}

function countParameters(){
    let ileSamolot, ileBoeing, ileAirbus, ileCessna, ileSzybowiec, ileF16;

    ileSamolot = ileBoeing = ileAirbus = ileCessna = ileSzybowiec = ileF16 = 0;

    for (let i=0;i<fleetOfAirplanes.length;i++){
        switch(fleetOfAirplanes[i].Nazwa){
            case "Samolot":
                ileSamolot++;
                break;
                case "Boeing":
                ileBoeing++;
                break;
                case "Airbus":
                ileAirbus++;
                break;
                case "Cessna":
                ileCessna++;
                break;
                case "Szybowiec":
                ileSzybowiec++;
                break;
                case "F16":
                ileF16++;
                break;
        }
    }
    document.getElementById("paramSamolot").innerHTML=ileSamolot;
    document.getElementById("paramBoeing").innerHTML=ileBoeing;
    document.getElementById("paramAirbus").innerHTML=ileAirbus;
    document.getElementById("paramCessna").innerHTML=ileCessna;
    document.getElementById("paramSzybowiec").innerHTML=ileSzybowiec;
    document.getElementById("paramF16").innerHTML=ileF16;
}