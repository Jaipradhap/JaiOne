
var serviceURL = "http://lowestprice.comuv.com/";
var employees;

$('#employeeListPage').live('pageshow', function(event) {

	getEmployeeList();
});

function getEmployeeList() {

 $.mobile.showPageLoadingMsg();
	$.getJSON(serviceURL + 'branchws.php', function(data) {
	  
		$('#employeeList li').remove();
		employees = data.item;
		$.each(employees, function(index, employee) {

        $('#employeeList').append('<li>' + '<a href="offerbanner.html?branchid=' + employee.branchid + '">' +
						'<img src="pics/logo.png"/>' +
						'<h4>' + employee.branchname  + '</h4>' +
						'</a></li>');

					});
		
		$('#employeeList').listview('refresh');
		$.mobile.hidePageLoadingMsg();
	}); 

	
}

