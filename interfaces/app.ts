interface Transaction{
    userAccount:number|string;
    userName:string;
}

interface BankAccount{
    accountNumber:number;
    accountHolder:string;
    balance:number;
    isActive:boolean;
    transactions?: Transaction[];
}

const transaction1:Transaction = {
    userAccount:1234,
    userName:'srikant'
}
const transaction2:Transaction = {
    userAccount:1234,
    userName:'srikant'
}


const BankAccount:BankAccount = {
    accountNumber:1234,
    accountHolder:'srikant',
    balance:42000000,
    isActive:true,
    transactions:[transaction1,transaction2]
}
