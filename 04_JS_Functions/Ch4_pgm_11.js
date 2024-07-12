// Using the same function with multiple objects

var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
};

movie3 = {
    title: "Star Wars: Episode VII - The Force Awakens",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors: "J.J.Abrams"
};

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

movie = movie1;
showMovieInfo();

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();

var question1;
var question2;
var question3;
var question;
var showQuestionInfo;

question1 = {
    text: "What is the capital of India?",
    options: ["A. New Delhi", "B. Kathmandu", "C.Dhaka ", "D.Kabul "],
    answer: "A"
};

question2 = {
    text: "How Many continents in the world?",
    options: ["A. 6", "B. 8", "C. 5", "D.7"],
    answer: "D"
};

question3 = {
    text: "What is the tallest mountain in the world?",
    options: ["A.Mount Everest", "B.K2", "C.Manaslu", "D.makalu "],
    answer: "A"
};
showquestion = function () {
    console.log("Question: " + question.text);
    console.log("Options: ");
    for (var i = 0; i < question.options.length; i++) {
        console.log(question.options[i]);
    }
    console.log("Correct Answer: " + question.answer);
    console.log("------------------------------");
};

question = question1;
showquestion();

question = question2;
showquestion();

question = question3;
showquestion();


/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */