$(document).ready(function(){
	$(".button-collapse").sideNav();
	$(".dropdown-button").dropdown();
	$('.scrollspy').scrollSpy();
	$('.materialboxed').materialbox();
	$('.collapsible').collapsible();

	var options = [
		{selector: '#songs-from-the-dog-house', offset: 200, callback: function() {
      $("#songs-from-the-dog-house-title").trigger("click");
    } },
		{selector: '#get-the-angle-right', offset: 200, callback: function() {
      $("#get-the-angle-right-title").trigger("click");
    } },
		{selector: '#pony-ride', offset: 200, callback: function() {
      $("#pony-ride-title").trigger("click");
    } },
	];

	Materialize.scrollFire(options);
});