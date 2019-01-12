import IDal from '../IDal';
import Author from 'src/model/Author';
import Book from 'src/model/Book';

const authors:Author[] = [];
authors.push({id:0, name:"Giannoco", books:[]});
authors.push({id:1, name:"Casanovas", books:[]});
authors.push({id:2, name:"Anonnymous", books:[]});

const books:Book[] = [];

export default class Dal implements IDal {
    public addAuthor(author: Author): Promise<void> {
        throw new Error("Method not implemented.");
    }    
    public addBook(book: Book): Promise<void> {
        return new Promise<void>((r,f)=>{
            books.push(book);
            r();
        });
    }
    public getAuthors(): Promise<Author[]> {
        return new Promise<Author[]>((r, f)=>{
            r(authors);
        });
    }
    public getBooks(): Promise<Book[]> {
        return new Promise<Book[]>((r, f)=>{
            r(books);
        });
    }
}