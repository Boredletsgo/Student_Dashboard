let students = [];

function addStudent() {
    const nameInput = document.getElementById('studentName');
    const name = nameInput.value.trim();
    
    if (name) {
        students.push(name);
        nameInput.value = '';
        displayStudents();
        saveStudents(); // simulate saving
    }
}

function displayStudents() {
    const list = document.getElementById('studentList');
    list.innerHTML = '';
    students.forEach(student => {
        const li = document.createElement('li');
        li.textContent = student;
        list.appendChild(li);
    });
}

function saveStudents() {
    // Simulating database save (you can later connect it to Azure Table)
    console.log('Saved students:', students);
}
