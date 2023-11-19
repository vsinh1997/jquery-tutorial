$(document).ready(function () {
  /*
  $('#btn1').click(function () {
    alert('Button clicked')
  });

  $('#btn1').on('click', function () {
    $('.para1').hide();
    $('.para1').toggle();
  });

  $('#btn2').on('click', function () {
    $('.para1').show();
  });

  $('#btn1').dblclick(function () {
    $('.para1').toggle();
  });

  $('#btn1').hover(function () {
    $('.para1').toggle();
  });

  $('#btn1').mouseenter(function () {
    $('.para1').toggle();
  });

  $('#btn1').mouseleave(function () {
    $('.para1').toggle();
  });

  $('#btn1').mousemove(function () {
    $('.para1').toggle();
  });

  $('#btn1').mousedown(function () {
    $('.para1').toggle();
  });

  $('#btn1').mouseup(function () {
    $('.para1').toggle();
  });

  $('#btn1').click(function (e) {
    console.log(e.currentTarget);
    console.log(e.currentTarget.id);
    console.log(e.currentTarget.className);
    console.log(e.currentTarget.innerHTML);
    console.log(e.currentTarget.outerHTML);
  });

  $(document).mousemove(function (e) { 
    $('#current-position').text("X: " + e.clientX + "\n" + "Y: " + e.clientY );
  });
  
  $('input').focus(function () {
    $(this).css('background-color', 'pink');
  });
  
  $('input').blur(function () {
    $(this).css('background-color', 'lightgreen');
  });
  
  $('input').keyup(function (e) { 
    console.log(e.target.value);
  });
  */

  $('#form').submit(function (e) {
    e.preventDefault();

    const name = $('input#name').val();
    const email = $('input#email').val();
    const gender = $('select#gender').val();
    
    console.log(`Full Name: ${name}`);
    console.log(`Email    : ${email}`);
    console.log(`Gender   : ${gender}`);
  });


});