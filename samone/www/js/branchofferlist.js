var serviceURLO = "http://lowestprice.comuv.com/";

$('#branchListPage').live('pageshow', function(event) {
	var id = getUrlVars()["branchid"];
	console.log("reports for " + id);	
	$.getJSON(serviceURLO + 'offerswebservices.php?f1='+id, function (data) {
		var reports = data.emp_info;
		$.each(reports, function(index, employee) {
		
		$('#branchList').append('<li>' + '<a href="singlebranchoffer.html?offerid=' + employee.id +'&branchid=' 
						+ id + '">' +
						'<img src="pics/logo.png"/>' +
						'<h4>' + employee.subject  + '</h4>' +
						'<p>' + employee.expirydate + '</p>' +
						'</a></li>');
		
		});
		$('#branchList').listview('refresh');
	});
});



function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
