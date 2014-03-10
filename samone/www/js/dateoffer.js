var serviceURLO = "http://lowestprice.comuv.com/";

$('#dateofferListPage').live('pageshow', function(event) {
	var id = getUrlVars()["branchid"];
	var pdate = getUrlVars()["pdate"];
	
	var tempTag='<center>' +
	'<a href="tel:9095764220"  class="button yellow gradient large-corners"><img src="css/images/icons-png/phone-white.png"></a></center>';
	
	$('#dateofferHeadList').html(tempTag);
	
	
	$.mobile.showPageLoadingMsg();
	$.getJSON(serviceURLO + 'dateoffersws.php?f1='+id +'&f2='+pdate, function (data) {
		var reports = data.emp_info;
		var flag;
		$.each(reports, function(index, employee) {
		flag=employee.varietyflag;
		
		if(flag!= '1') {
		
		$('#dateofferList').append('<li>' + '<a href="singlebranchoffer.html?offerid=' + employee.id +'&branchid=' 
						+ id + '">' +
						'<img src="pics/logo.png"/>' +
						'<h4>' + employee.subject  + '</h4>' +
						'<p>Valid Upto ' + employee.expirydate + '</p>' +
						'</a></li>');
	
		}
		else {
		$('#dateofferList').append('<li>' + '<a href="singlebranchoffer.html?offerid=' + employee.id +'&branchid=' 
						+ id + '">' +
						'<img src="pics/spgreen.png"/>' +
						'<h4>' + employee.subject  + '</h4>' +
						'<p>Valid Upto ' + employee.expirydate + '</p>' +
						'</a></li>');
	
		}
		
		});
		$('#dateofferList').listview('refresh');
		$.mobile.hidePageLoadingMsg();
	});
});

