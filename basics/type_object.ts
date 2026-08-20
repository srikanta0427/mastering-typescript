type User ={
    name:String,
    age :number,
    address?:String
}

const user:User={
    name:'Srikanta',
    age:12
}

function login(userData:User):User{
    return userData;
}

const getLoginUser = login(user)
console.log(getLoginUser)
console.log(login({name:'soumya',age:12}))