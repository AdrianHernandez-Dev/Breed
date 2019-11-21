https://dog.ceo/api/breed/hound/images/random

'use strict';

function getDogImage(dog) {
  fetch(`https://dog.ceo/api/breed/${dog}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. We dont have that breed'));
}

function watchForm() {
  $('#dogs').on('submit', function(event) {
    event.preventDefault();
    $('.hidden').empty();
    let dog = $('input#breed').val()
    console.log(dog);
    getDogImage(dog);
  });
}
function displayResults(responseJson) {
  if (responseJson.status === "error") {
    alert("We don't have that dog breed")
  }
  else {
  $('.hidden').append(
  `<img src="${responseJson.message}" class="results-img">`
  )
  $('.hidden').removeClass('hidden');
}
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});