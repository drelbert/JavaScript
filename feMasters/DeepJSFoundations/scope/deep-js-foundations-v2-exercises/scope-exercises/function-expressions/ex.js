// Utility function to access student record by id
function getStudentById(studentId) {
	return studentRecords.find(function matchId(record) {  // The find() function takes a callback 'function matchId(record)' invoked for each element in array 
		// When the first of those returns true, then the value from the array is returned
		return (record.id == studentId); 
	}) 
};

// Turn record.ids into a list of student records
function printRecords(recordIds) {
	var records = recordIds.map(getStudentById) // The mapper function using the utility above

	records.sort(function sortByNameAcs(record1, record2){  // the sort function is a mutator
		if (record1.name < record2.name) {  // no coercion, but alpha numeric comparison
			return -1;
		}
		else if (record1.name > record2.name) {
			return 1;
		}
		else {
			return 0;
		}
	});

	records.forEach(function printRecord(record){
		console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
	});

}



function paidStudentsToEnroll() {
	// TODO
}

function remindUnpaid(recordIds) {
	// TODO
}


// ********************************

var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment);
console.log("---");

currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);

console.log("----");
remindUnpaid(currentEnrollment);

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
