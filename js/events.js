//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey");
  })
}

getIt();


function frameIt() {
  $('img').ready( function() {
    $('img').addClass('tasty');
  })
}

frameIt();

function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.");
  })
}

submitIt();

function pressIt() {
  $('#typing').on('keyPress', function(e) {
    if (e.key == 'g') {
      alert("You have pressed G.")
    }
  })
}

pressIt();
