var branchid;

$('#categoriesListPage').live('pageshow', function(event) {
    branchid = getUrlVars()["branchid"];
	getCategoryList();
});

function getCategoryList() {

 $.mobile.showPageLoadingMsg();
	
	var temp_cat='<a href="branchoffers.html?branchid=' + branchid +'" class="button yellow gradient large-corners"><font color="black">Offers</font></a>' +
	'<a href="branchbanners.html?branchid=' + branchid +'" class="button yellow gradient large-corners"><font color="black">Banners</font></a>';

	console.log(temp_cat);
	
        $('#categoryList').html(temp_cat);

		$.mobile.hidePageLoadingMsg();


	
}

