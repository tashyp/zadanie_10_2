//jQuery

$(document).ready(function(){
	console.log('DOM loaded - you can have fun');
});

/*$(function(){
	console.log('DOM loaded - you can have fun');
});
*/

/*$(function() {
  $('p').css('color', 'red');
});

var paragraphs = $('p').css('color', 'red');
*/
//console.log(paragraphs[0]);

//console.log(paragraphs.eq(0));

/*$(function(){
  var paragraphs = $('p').css('color', 'red');
  var rawFirstParagraph = paragraphs[0];
  console.log(rawFirstParagraph);
  var jqFirstParagraph = paragraphs.eq(0)
  console.log(jqFirstParagraph);
  jqFirstParagraph.css('color', 'blue');
});
*/

//$( '<p>Hi!</p>' );

/*
$(function(){
  var p = $( '<p></p>' ),
      pWithText = $( '<p>Hi!</p>' ),
      pWithClass = $( '<p class="greeting">Hi!</p>' ); 
  console.log(p);
  console.log(pWithText);
  console.log(pWithClass);
  
  $("body").append(pWithText);
  $("body").append(pWithClass);
});
*/
//literowanie po elementach DOM
/*$('p').each(function( index, elem ) {
  $( elem ).text('paragraph ' + index);
});*/
/*
$(function(){
  var li = $('nav').find('li').last();
  li.css("color", "red");
});
*/
/*
$(function(){
  var li = $('nav').find('li').last().css('color', 'blue');
  console.log(li);
});

$(function(){
  $("ul").append("<li>New element</li>");
  var firstItem = $('nav').find('li').first(); 
  console.log(firstItem.text());  
  firstItem.css("color", "red");
});
*/

var span = $('span');
span.each(function(index, element) {
	if(index % 2 == 0) {
		$(element).css('color', 'red');
	};
});

//$('span:even').css('color', 'red');

var paragraphs = $('p');
paragraphs.each(function(index, element) {
    var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
    $(element).append(button);
});

$('button').click(function(){
	alert($(this).attr('data-tmp'));
});

