'use strict';
// First Q (asking about age)
let age = prompt('Am I 30 years old ? y=yes/n=no');
if (age.toLocaleLowerCase() === 'y') {
    console.log('Thats right');
    alert('Thats right');
}
else {
    console.log('No No, wrong answer. actully my is 30 Years Old');
    alert('Sorry, Wrong answer');
}

// Second Q (asking about job)
let job = prompt('Am I a software developer ? y=yes/n=no');
if (job.toLocaleLowerCase() === 'y') {
    console.log('Thats right');
    alert('Thats right');
}
else {
    console.log('No No, wrong answer. I would like to be a software developers');
    alert('Wrong answer');
}


// Third Q (asking about field)
let field = prompt('Is my favorite field of scince is data scince ? y=yes/n=no');
if (field.toLocaleLowerCase() === 'y') {
    console.log('Thats right');
    alert('Thats right');
}
else {
    console.log('No No, wrong answer. I am in love with ML, DL, and Data scince');
    alert('Wrong answer. I am in love with ML, DL, and Data scince');
}


// Fourth Q (asking about hoppy)
let hoppy = prompt('Is one of my hoppy weight lefting fitness sport ? y=yes/n=no');
if (hoppy.toLocaleLowerCase() === 'y') {
    console.log('Thats right');
    alert('Thats right');
}
else {
    console.log('No No, wrong answer. :@ :@');
    alert('Wrong answer:@ :@');
}

// Fifth Q (asking about food)
let food = prompt('Is my favorite food is shawermah? y=yes/n=no');
if (food.toLocaleLowerCase() === 'y') {
    console.log('Thats right');
    alert('Thats right');
}
else {
    console.log('No No, wrong answer. I love Shawermah');
    alert('Wrong answer. love Shawermah');
}

// Ending Q (asking about user name)
let name1 = prompt('You didnt tell me whats your name?');
console.log('User name is: ' + name1);
alert('nice to meet you ' + name1);
