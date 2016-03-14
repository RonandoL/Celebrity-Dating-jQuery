$(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var age = $('#age').val();
    var genderPref = $('#genderPref').val();

    $('.men-sixty').hide();
    $('.men-fifty').hide();
    $('.men-under50').hide();
    $('.woman-sixty').hide();
    $('.woman-fifty').hide();
    $('.woman-under50').hide();

    if (age === "") {
      // alert('Please enter an age');
      $('#age').addClass('red glyphicon glyphicon-wrench');
      $('#age').after('<i class="redText"> *Please add your age </i>');
    } else if (age >= 60 && genderPref === 'men') {
        $('.men-sixty').show();
    } else if (age >= 50 && age < 60 && genderPref === 'men') {
        $('.men-fifty').show();
    } else if (age < 50 && genderPref === 'men') {
        $('.men-under50').show();
    } else if (age >= 60 && genderPref === 'women') {
        $('.woman-sixty').show();
    } else if (age >= 50 && age < 60 && genderPref === 'women') {
        $('.woman-fifty').show();
    } else if (age < 50 && genderPref === 'women') {
        $('.woman-under50').show();
    } else {

    }
  });

});
