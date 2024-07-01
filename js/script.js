var students = [
    {
        id: 1,
        name: "Glauco",
        email: "glauco@email.com",
        telephone: "11973631403",
        course: 1,
        period: "Manhã",
    },
    {
        id: 2,
        name: "Luis",
        email: "luiso@email.com",
        telephone: "1191231333",
        course: 2,
        period: "Tarde",
    },
    {
        id: 3,
        name: "Leonardo",
        email: "leo@email.com",
        telephone: "119321321",
        course: 3,
        period: "Noite",
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

    var periodNode = document.createTextNode(op.period);
    newRow.insertCell().appendChild(periodNode);
}
