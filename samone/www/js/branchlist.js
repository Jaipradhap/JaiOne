
var serviceURL = "http://lowestprice.comuv.com/";
var employees;

$('#employeeListPage').live('pageshow', function(event) {

	getEmployeeList();
});

function getEmployeeList() {
$("div#loadingid").show();

	$.getJSON(serviceURL + 'branchws.php', function(data) {
	
		$('#employeeList li').remove();
		employees = data.item;
		$.each(employees, function(index, employee) {

        $('#employeeList').append('<li>' + '<a href="branchoffers.html?branchid=' + employee.branchid + '">' +
						'<img src="pics/logo.png"/>' +
						'<h4>' + employee.branchname  + '</h4>' +
						'</a></li>');

					});
		$("div#loadingid").hide();	
		$('#employeeList').listview('refresh');
	}); 

	
}

