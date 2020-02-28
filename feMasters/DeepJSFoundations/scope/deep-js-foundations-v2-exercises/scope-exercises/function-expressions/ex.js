// Utility function to access student record by id
// This is a standalone function that can be used multiple times below
function getStudentById(studentId) {
	return studentRecords.find(function matchId(record){ // The find() function takes a callback 'function matchId(record)' invoked for each element in array 
		return (record.id == studentId);  	// When the first of those returns true, then the value from the array is returned
	})
}

// Turn record.ids into a list of student records
function printRecords(recordIds) {
	var records = recordIds.map(getStudentById) // The mapper function using the utility above
	// Creating a function callback with name sortByNameAsc
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
	// get by setting idsToEnroll as studentRecords to allow for filter()
	var idsToEnroll = studentRecords.filter(function needsToEnroll(record){
		return (record.paid && !currentEnrollment.includes(record.id))
	})
	// while the record is returned, actually just need the id so use .map()
	.map(function getStudentById(record){
		return record.id;
	});

	// return and spread
	return [ ...currentEnrollment, ...idsToEnroll];
}

function remindUnpaid(recordIds) {
	// take a list of student ids
	var  unpaidIds = recordIds.filter(function isUnpaid(studentId){
		 // get the record
		 var record = getStudentById(studentId);
		 	// filter the list of student ids on unpaid status
			 return !record.paid;
	});

	//pass the filtered list to printRecords() to print the unpaid reminders
	printRecords(unpaidIds);
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
