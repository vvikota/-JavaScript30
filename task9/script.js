const dogs = [{name: 'Snickers', age: 2},{name: 'hugo', age: 9},{name: 'Snickers', age: 2},{name: 'hugo', age: 9},{name: 'Snickers', age: 2},{name: 'hugo', age: 9},{name: 'Snickers', age: 2},{name: 'hugo', age: 9}];
const p = document.querySelector('p');

function makeGreen() {
  p.style.color = '#BADA55';
  p.style.fontsize = '50px';
}

console.warn('OH No!');

console.error('Shit');

console.info('crocodiles eat 3-4 people per year');

console.clear();

console.log(p);
console.dir(p);
console.clear();

console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });

 console.table(dogs);     