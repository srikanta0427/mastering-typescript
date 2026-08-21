function logAnything<T extends hasAge>(arg:T[]):T[]{
    return arg;
}

interface hasAge{
     age:number
}
interface hasAll{
    name:string;
    age:number;
}

const player:hasAge[] = [
    {age:1},
    {age:2}
];



const user:hasAll[] = [
    {name:'s',age:1},
    {name:'s',age:2}
]

const getPlayer = logAnything(player);
// logAnything(hasAll)
