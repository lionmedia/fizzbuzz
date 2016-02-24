$( document ).ready(function() {

for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
      $('<p class="item"></p>').appendTo('.input').html('<p class="item">' + i + " " + "Fizz" + '</p>');
  } else if (i % 5 === 0) {
      
	$('<p class="item"></p>').appendTo('.input').html('<p class="item">' + i + " " + "Buzz" + '</p>');
 
  } else {

  	$('<p class="item"></p>').appendTo('.input').html('<p class="item">' + i + '</p>');
 
  } if (i % 3 === 0 && i % 5 === 0) {

  	$('<p class="item"></p>').appendTo('.input').html('<p class="item">' + i + " " + "FizzBuzz" + '</p>');
 
  }
 } 
});

