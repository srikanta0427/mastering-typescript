interface Book{
    bookId:number;
    name:string
}

interface EBook extends Book{
    format:string
}

interface AudioBook extends EBook{
    // in hour
    duration:number
}

const book1:AudioBook = {
    bookId:1,
    name:'nobel',
    format:'.mp3',
    duration:2
}

console.log(book1)