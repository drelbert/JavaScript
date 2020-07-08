var deepJS = defineWorkshop();  // Instanciating the workshop = step 4

// Define all records by calling deepJS.addStudent() on each = step
	(313, "Frank", /*paid=*/true);
	(410, "Suzy",/*paid=*/true);
	(709, "Brian", /*paid=*/false);
	(105, "Henry", /*paid=*/false);
	(502, "Mary", /*paid=*/true);
	(664, "Bob", /*paid=*/false);
	(250, "Peter",/*paid=*/true);
	(375, "Sarah", /*paid=*/true);
	(867, "Greg", /*paid=*/false);

deepJS.enrollStudent(410)
deepJS.enrollStudent(105)
deepJS.enrollStudent(664)
deepJS.enrollStudent(375)



deepJS.printCurrentEnrollment();
console.log("----");
deepJS.enrollPaidStudents();
console.log("----");
deepJS.remoindUnpaidStudents();

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/


// ********************************
function defineWorkshop() {  // Wrapping all the functions in a module factory = step 1

	// adding data to close over with currentEnrollment and studentRecords = step 3
	var currentEnrollment = []; 
	var studentRecords = [];

	var publicAPI = {   // making the public API object = step 2
		addStudent,
		enrollStudent,
		printCurrentEnrollment,
		enrollPaidStudents,
		remindUnpaidStudents
	}; 

	return publicAPI; 
// ********************************


function addStudent(id, name, paid) {
	studentRecords.push({ id, name, paid});  // push into the student records array, an object that includes id, name, paid
}

function enrollStudent(id) {
	if (!currentEnrollment.includes(id)) {  // if check to ensure no duplicates
		currentEnrollment.push(id);
	}
}

function printCurrentEnrollment() {
	printRecords(currentEnrollment);
}

function enrollPaidStudents() {
	currentEnrollment = paidStudentsToEnroll();
	printRecords(currentEnrollment);
}

function remindUnpaidStudents() {
	remindUnpaid = (currentEnrollment)
}


function getStudentFromId(studentId) {
	return studentRecords.find(matchId);

	// *************************

	function matchId(record) {
		return (record.id == studentId);
	}
}

function printRecords(recordIds) {
	var records = recordIds.map(getStudentFromId);

	records.sort(sortByNameAsc);

	records.forEach(printRecord);
}

function sortByNameAsc(record1,record2){
	if (record1.name < record2.name) return -1;
	else if (record1.name > record2.name) return 1;
	else return 0;
}

function printRecord(record) {
	console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
}

function paidStudentsToEnroll() {
	var recordsToEnroll = studentRecords.filter(needToEnroll);

	var idsToEnroll = recordsToEnroll.map(getStudentId);

	return [ ...currentEnrollment, ...idsToEnroll ];
}

function needToEnroll(record) {
	return (record.paid && !currentEnrollment.includes(record.id));
}

function getStudentId(record) {
	return record.id;
}

function remindUnpaid(recordIds) {
	var unpaidIds = recordIds.filter(notYetPaid);

	printRecords(unpaidIds);
}

function notYetPaid(studentId) {
	var record = getStudentFromId(studentId);
	return !record.paid;
}

}