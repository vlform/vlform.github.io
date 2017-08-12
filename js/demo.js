
$(function(){

$('#submit').on('click',function(e){

var name = new Valid($('#username'),e);

name.vlRequired("please enter the username");

});
$('.text').vlToolTip({
    position:'left'
})
})
// example code 
$(function(){
$('#form').on('click',function(e){
  var fullname = new Valid($('#username'),e);
  fullname.vlRequired("Please enter the username");
  fullname.vlText("Please enter the text ");
  fullname.vlsetMin(5,"Name is too short");
  fullname.vlsetMax(10,"name is too long");

  var userage = new Valid($('#userAge'),e);
  userage.vlRequired("Please enter the user age");
  userage.vlNumber("Please enter the number");

  var checkbox = new Valid( $('#checkbox'), e);
 checkbox.vlCheckbox("Required");

 var radio = new Valid($('.gender'), e);
 radio.vlRadio("*");

 var email = new Valid($('#email'),e);
 email.vlRequired("Please enter the email");
 email.vlEmail("Please enter the valid email");

 var password = new Valid( $('#password'), e);
                       password.vlRequired("password is Required");
                       password.vlsetMax(30, "password is too large hard to remember");
                       password.vlsetMin(7, "Make sure your password length is greater than 7");

        var repassword = new Valid( $('#re-password'), e);
                        repassword.vlEqual($('#password'), "Re type password does not match");
                        repassword.vlRequired("RE type your password");
                        repassword.vlsetMax(30, "password is too large hard to remember");
                        repassword.vlsetMin(7, "Make sure your password length is greater than 7");

                        var select = new Valid($('#select'), e);
                         select.vlSelect("Please Select");


});
});



$('#username').vlToolTip({
  position:"left"
});
$('#userAge').vlToolTip({
  position:"left",

});
$('#email').vlToolTip({
  position:"left"
});
