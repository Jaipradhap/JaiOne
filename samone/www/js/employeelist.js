var serviceURL = "http://lowestprice.comuv.com/branchws.php";


var employees;

$('#employeeListPage').bind('pageinit', function(event) {

	getEmployeeList();
});

function getEmployeeList() {

var xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
 	document.getElementById("headerinfo").innerHTML = 'Chennai Branches';
	$('#employeeList li').remove();
	var json = eval('('+ xmlhttp.responseText +')');
	for(var i=0; i < json.item.length; i++)
		{

		$('#employeeList').append('<li>' +
						'<img src="pics/logo.jpg"/>' +
						'<h4>' + json.item[i].branchname  + '</h4>' +
						'</li>');
	
		}
		$('#employeeList').listview('refresh');
    } 
  }
  
document.getElementById("headerinfo").innerHTML = 'Loading...'; 
xmlhttp.open("GET",serviceURL,true);
xmlhttp.send();

/*
	$.getJSON(serviceURL + 'branchws.php', function(data) {
		$('#employeeList li').remove();
		employees = data.items;
		$.each(employees, function(index, employee) {
			$('#employeeList').append('<li>' +
					'<img src="pics/logo.png"/>' +
					'<h4>' + employee.branchname + ' ' + employee.branchid + '</h4>' +
					'<p>' + employee.branchname + '</p>' +
					'</li>');
		});
		$('#employeeList').listview('refresh');
	}); 
	*/
	/*
	var json = eval('('+ xmlHttpRequest.responseText +')');
		for(var i=0; i < json.weatherdetails.weatherreport.length; i++)
		{
			if(
                              json.weatherdetails.weatherreport[i].city.toLowerCase() ==
                               _City)
			{
	*/
}

