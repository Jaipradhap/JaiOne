var serviceURLO = "http://lowestprice.comuv.com/";

$('#branchListPage').live('pageshow', function(event) {
	var id = getUrlVars()["branchid"];
	
	var tempTag='<center><a href="alloffers.html?branchid=' + id +'" class="button yellow gradient large-corners"><font color="black">All Offers</a>' +
	'<a href="tel:9095764220"  class="button yellow gradient large-corners"><img src="css/images/icons-png/phone-white.png"></a></center>';
	
	$('#branchHeadList').html(tempTag);
	
	
	$.mobile.showPageLoadingMsg();
	$.getJSON(serviceURLO + 'offerswebservices.php?f1='+id, function (data) {
		var reports = data.emp_info;
		$.each(reports, function(index, employee) {
		
		$('#branchList').append('<li>' + '<a href="singlebranchoffer.html?offerid=' + employee.id +'&branchid=' 
						+ id + '">' +
						'<img src="pics/spoffer.jpg" />' +
						'<h4>' + employee.subject  + '</h4>' +
						'<p>' + employee.expirydate + '</p>' +
						'</a></li>');
		
		});
		$('#branchList').listview('refresh');
		
	});
	$.mobile.hidePageLoadingMsg();
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
