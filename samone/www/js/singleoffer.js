var serviceURLO = "http://lowestprice.comuv.com/";

$('#detailsPage').live('pageshow', function(event) {
	var offerid = getUrlVars()["offerid"];
	var branchid = getUrlVars()["branchid"];
	
	$.mobile.showPageLoadingMsg();
	$.getJSON(serviceURLO + 'singleoffersws.php?f1='+ offerid +'&f2=' + branchid, function (data) {
		
		var reports = data.emp_info;
		
		$.each(reports, function(index, employee) {
		
		$('#edate').text(employee.expirydate);
		
		$('#pdate').text(employee.postdate);

		$('#subject').text(employee.subject);
		
		$('#bodycontent').text(employee.bodycontent);
		
		});
		
		var bran = data.branch_info;

		$.each(bran, function(index, branch) {
		
		$('#address').text(branch.address);
		
		});

		$.mobile.hidePageLoadingMsg();
	});
});
