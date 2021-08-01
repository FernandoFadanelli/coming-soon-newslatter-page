$(".email-form").on("submit", function(e) {
  e.preventDefault();
  e.stopPropagation();

  // We use trim to trim any whitespace the user might have typed
  const emailValue = $(this).serializeArray()[0].value.trim();

  checkInput(emailValue);
});

function checkInput(email) {
  if (email === "") {
    setErrorFor("Email cannot be blank");
    $(".form-container").addClass("error");

  } else if (!validateEmail(email)) {
    setErrorFor("Please provide a valid email");
    $(".form-container").addClass("error");

  } else {
    $(".form-container").removeClass("error");
    console.log("You've been subscribed to our newslatter!");
    $(".email-form").trigger("reset");
  }
}

function setErrorFor(message) {
  $(".form-container small").text(message);
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
