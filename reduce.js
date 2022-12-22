let users = [
    {firstName: 'John', lastName: 'Doe', age:26},
    {firstName: 'Donald', lastName: 'Trump', age:75},
    {firstName: 'Elon', lastName: 'Musk', age:50},
    {firstName: 'Simrah', lastName: 'Khan', age:26},
]

let output = users.reduce((acc, curr) => {
    if (curr.age >= 30)
        acc.push(curr.firstName + ' ' + curr.lastName);
    return acc;
}, []);

console.log(output);