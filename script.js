// Email validation
function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

// Submit Button
$('#submitButton').click(function() {
  var errorMessage = '';
  var fieldsMissing = '';
  // Missing fields error check
  if ($('#email').val() == '') {
    fieldsMissing += '<p>Email</p>';
  }
  if ($('#phone').val() == '') {
    fieldsMissing += '<p>Phone</p>';
  }
  if ($('#password').val() == '') {
    fieldsMissing += '<p>Password</p>';
  }
  if ($('#passwordConfirm').val() == '') {
    fieldsMissing += '<p>Confirm Password</p>';
  }
  // Missing field error alert
  if (fieldsMissing != '') {
    errorMessage += '<p>The following fields are missing</p>' + fieldsMissing;
  }
  // Validation checks
  if (isEmail($('#email').val()) == false && fieldsMissing == false) {
    errorMessage += '<p>Invalid email address</p>';
  }
  if ($.isNumeric($('#phone').val()) == false && fieldsMissing == false) {
    errorMessage += '<p>Non-numeric phone number</p>';
  }
  if ($('#password').val() != $('#passwordConfirm').val()) {
    errorMessage += '<p>Mismatched password</p>';
  }
  // Success / Error alert
  if (errorMessage != '') {
    $('#errorMessage').html(errorMessage);
  } else {
    $('#successMessage').show();
    $('#errorMessage').hide();
  }
});
