 
$( document ).ready(function() {
    $( "a" ).click(function( event ) {
        alert( "The link will no longer take you to jquery.com" );
        event.preventDefault();
    });
});

$( "a" ).click(function( event ) {
 
    event.preventDefault();
 
    $( this ).hide( "slow" );
 
});