
var serviceURL = "http://lowestprice.comuv.com/";
var employees;

$(document).on('pageshow','#employeeListPage', function(event) {

	getEmployeeList();
});

function getEmployeeList() {


	$.getJSON(serviceURL + 'branchws.php', function(data) {
	
		$('#employeeList li').remove();
		employees = data.item;
		$.each(employees, function(index, employee) {

        $('#employeeList').append('<li>' + '<a href="branchoffers.html?branchid=' + employee.branchid + '">' +
						'<img src="pics/logo.png"/>' +
						'<h4>' + employee.branchname  + '</h4>' +
						'</a></li>');

					});

		$('#employeeList').listview('refresh');
	}); 

	
}

