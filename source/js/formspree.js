$(document).ready(function() {
  $('#contact-form').on('submit', function(e) {
    e.preventDefault();
    
    //get the name field value
    var name = $('#name').val();
    //get the name field value
    var email = $('#email').val();
    //get the comments
    var message = $('#message').val();
                
    //pretend we don't need validation
    
    //send to formspree
    $.ajax({
      url:'https://formspree.io/dennisdoughertymusic@gmail.com',
      method:'POST',
      data:{
        name:name,
        _replyto:email,
        message:message,
        _subject:'New message!',
      },
      dataType:"json",
      success:function() {
        console.log('success'); 
        window.location.href = "thanks.html";
      }
    });
  });
}); 