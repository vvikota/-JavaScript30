// let age = 100;
// let age2 = age;
// console.log(age, age2)

// age = 200;
// console.log(age, age2);

// let name = "vi"
// let name2 = name;
// console.log(name, name2);

// name = 'vvikot';
// console.log(name, name2);

//Array
//  const players = ['wes', 'sarah', 'ryan', 'poppy'];
// const team = players;
// //console.log(players, team);

// team[3] = 'Vi';
// players[4] = 'petr';
// console.log(players, team);

// //copy array
// const team2 = players.slice();
// console.log(players, team, team2);

// //copy array another variant
// const team3 = [].concat(players);
// console.log(players, team, team2, team3);

//or copy , use the new ES6 spread
// const team4 = [...players];
// team4[5] = 'hee hawww';
// //console.log(players, team4);

// team5 = Array.from(players);
// team5[4] = 'vvikot';
// console.log(players, team5);

//Object
// const person = {
//   name: 'Wes Bos',
//   age: 80
// };

// // const captain = person;
// // captain.weight = 20;
// // console.log(person, captain);

// const cap2 = Object.assign({}, person, { number: 99, age: 12});
// //console.log(cap2, person);

// const cap3 = {...person};
// cap3.weight = 24;
// console.log(cap3, person);

const wes = {
  name: 'wes', 
  age: 100,
  social: {
    twitter: '@wes',
    facebook: 'wesoss'
  }
};

//console.log(wes);

// const dev = Object.assign({}, wes);
// dev.social.twitter = '@dev';
// dev.age = 24;
// console.log(dev, wes);

const dev2 = JSON.parse(JSON.stringify(wes));
dev2.social.twitter = '@dev';
dev2.age = 24;
console.log(dev2, wes);
