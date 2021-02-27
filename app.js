//[0]is questions, [1]is answer, if [1]is right then return [0] to be included in quiz
var questions = [
    ["what solar system do we live in?", "Milky Way"],
    ["How much wood would a woodchuck chuck if a woodchuck could chuck wood?", "A lot"],
    ["What's Willis Tower's real name?", "Sears Tower"],
    ["What's the name of the old white sox park fro mthe 1990s?", "Comiskey"],
    ["How many tea is in Derek's cup?", "A litte"]
];

var correctAnswers = 0;
var questions;
var answer;
var response;
var html;
var correct = [];
var wrong = [];

//whenever you get html content toghetehr, after answer all questions, put all inside a function 
function print(text) {
    var contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = text
}

//var html = 'asdfg'
//html += 'asdfg'

//building HTML ordered list, looping and creating list element for the list passed over 
function htmlList(aList) {
    var orderedList = '<ol>'
    for (var i = 0; i < aList.length; i++) {
        var element = aList[i];
        orderedList += `<li>${element}</li>`
    }
    orderedList += '</ol>';
    return orderedList;
}

//for every questions we loop over, pull out questions == questions variable 
for (var i = 0; i < questions.length; i++) {
    question = questions[i][0];
    answer = questions[i][1];
    response = prompt(question);

    if (response.toLowerCase() == answer.toLowerCase()){
        correct.push(question);
        correctAnswers += 1;
    }
    else {
        wrong.push(question);
    }
}

html = `You got ${correctAnswers} questions right.`;
html += '<h2>Here are the questions you got right: </h2>'
html += htmlList(correct);
html += '<h2>Here are the questions you got wrong: </h2>'
html += htmlList(wrong);

print(html);