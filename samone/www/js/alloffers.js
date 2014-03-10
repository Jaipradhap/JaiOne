var serviceURLO = "http://lowestprice.comuv.com/";

$('#alloffersListPage').live('pageshow', function(event) {
	var id = getUrlVars()["branchid"];
	
	var tempTag='<a href="branchoffers.html?branchid=' + id +'" class="button yellow gradient large-corners"><font color="black">Special Offers</a>' +
	'<a href="tel:9095764220"  class="button yellow gradient large-corners"><img src="css/images/icons-png/phone-white.png"></a>';
	
	$('#alloffersHeadList').html(tempTag);
	
	
	$.mobile.showPageLoadingMsg();
	$.getJSON(serviceURLO + 'alloffersws1.php?f1='+id, function (data) {
		var reports = data.emp_info;
		$.each(reports, function(index, employee) {
		
		$('#alloffersList').append('<li>' + '<a href="dateoffer.html?pdate=' + employee.ppostdate +'&branchid=' 
						+ id + '">' +
						'<img src="pics/offero.png"/>' +
						'<h4>' + employee.postdate  + '</h4>' +
						'<p>' + employee.offers + ' Offer(s)</p>' +
						'</a></li>');
		
		});
		$('#alloffersList').listview('refresh');
		$.mobile.hidePageLoadingMsg();
	});
});
