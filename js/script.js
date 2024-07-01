var students = [
    {
        id: 1,
        name: "Glauco",
        email: "glauco@email.com",
        telephone: "11973631403",
        course: 1,
        morning: true,
        afternoon: false,
        night: false,
    },
    {
        id: 2,
        name: "Luis",
        email: "luiso@email.com",
        telephone: "1191231333",
        course: 2,
        morning: false,
        afternoon: true,
        night: false,
    },
    {
        id: 3,
        name: "Leonardo",
        email: "leo@email.com",
        telephone: "119321321",
        course: 3,
        morning: false,
        afternoon: false,
        night: true,
    },
];

var courses = [
    { id: 1, name: "Java" },
    { id: 2, name: "Angular" },
    { id: 3, name: "HTML + CSS" }
];

loadStudents();

function loadStudents() {
    for (let op of students) {
        addNewRow(op);
    }
}

function save() {
    var op = {
        id: students.length + 1,
        name: document.getElementById("inputName").value,
        email: document.getElementById("inputEmail").value,
        telephone: document.getElementById("inputTelefone").value,
        course: document.getElementById("selectCurso").value,
        morning: document.getElementById("radioManha").checked,
        afternoon: document.getElementById("radioTarde").checked,
        night: document.getElementById("radioNoite").checked,
    };

    addNewRow(op);
    students.push(op);

    //document.getElementById("idformulario").reset();
}


function addNewRow(op) {
    var table = document.getElementById("studentstable");

    var newRow = table.insertRow();

    var idNode = document.createTextNode(op.id);
    newRow.insertCell().appendChild(idNode);

    var nameNode = document.createTextNode(op.name);
    newRow.insertCell().appendChild(nameNode);

    var emailNode = document.createTextNode(op.email);
    newRow.insertCell().appendChild(emailNode);

    var telephoneNode = document.createTextNode(op.telephone);
    newRow.insertCell().appendChild(telephoneNode);

    var courseNode = document.createTextNode(courses[op.course - 1].name);
    newRow.insertCell().appendChild(courseNode);

    var opcao = "";
    if (op.morning)
        opcao = "Manhã";
    else if (op.afternoon)
        opcao = "Tarde";
    else if (op.night)
        opcao = "Noite";

    newRow.insertCell().innerHTML = opcao;

    /* var periodNode = document.createTextNode(periods[op.period - 1].name);
     newRow.insertCell().appendChild(periodNode); */
}
