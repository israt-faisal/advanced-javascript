const students = [
    {id: 21, name: 'omar sunny'},
    {id: 31, name: 'maannaaaaa'},
    {id: 41, name: 'moyurii'},
    {id: 61, name: 'deepjol'}
];

const names = students.map(s => s.name);
const ids = students.map(s=> s.id);
const bigger = students.filter(s=> s.id > 21);
const biggerone = students.find(s => s.id > 31);
console.log(biggerone);
