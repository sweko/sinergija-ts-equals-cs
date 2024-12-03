const greet = (name) => `Hello, ${name}!`;
const people = ["JavaScript", "Wekoslav", "Sinergija", "Belgrade"];

const greeted = people.map(greet);

for (const greeting of greeted) {
    console.log(greeting);
}



