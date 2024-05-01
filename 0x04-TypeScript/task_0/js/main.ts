// Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)

// Define the Student interface with types
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

// Create two student objects
// Create two students, and create an array named studentsList containing the two variables
const firstStudent: Student = {
	firstName: "Samuel",
	lastName: "Cletus",
	age: 35,
	location: "Benue"
}

const secondStudent: Student = {
	firstName: "Lilian",
	lastName: "Cletus",
	age: 28,
	location: "AkwaIbom"
}

// Create an array of students
const studentsList = [firstStudent, secondStudent];

const table = document.getElementById('studentTable') as HTMLTableElement;

// Create a new row for each student and append it to the table
studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})
