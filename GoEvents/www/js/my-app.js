// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});
var view1 = myApp.addView('#view1');
var view2 = myApp.addView('#view2');
var view3 = myApp.addView('#view3');
var view3 = myApp.addView('#view4');
var anotherview = myApp.addView('.another-view');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('Events', function(page) {
    // Do something here for "about" page

});


// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function(e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'Events') {
        // Following code will be executed for page with data-page attribute equal to "about"
        
    }
});





