/*$(document).ready(function(){
    $("#globalNavbar").affix({
        //offset: { 
        //    top: 190 
        //}
    });
});*/
$(document).ready(function(){
    $("#globalNavbar").on('affixed.bs.affix', function(){
        //alert("The navigation menu has been affixed. Now it doesn't scroll with the page.");
		console.log("The navigation menu has been affixed. Now it doesn't scroll with the page.");
    });
});