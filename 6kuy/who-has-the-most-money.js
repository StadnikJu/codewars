// You're going on a trip with some students and it's up to you to keep
// track of how much money each Student has. A student is defined like this:
// As you can tell, each Student has some fives, tens, and twenties. Your job 
// is to return the name of the student with the most money. If every student 
// has the same amount, then return "all".
// Each student will have a unique name
// There will always be a clear winner: either one person has the most, or 
// everyone has the same amount If there is only one student, then that student 
// has the most money

function mostMoney(students) {
    const length = students.length;
    const result = students.map((s) => {
        return {
            name: s.name, 
            many: s.fives * 5 + s.tens * 10 + s.twenties * 20
        }
        }).sort((a, b) => b.many - a.many);
    const check = result.filter(s => s.many === result[0].many).length;
    if(check === length && length > 1) {
        return "all";
    }

    return result[0].name;
}


class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}

