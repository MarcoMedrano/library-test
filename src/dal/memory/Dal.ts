import IDal from '../IDal';
import Author from 'src/model/Author';
import Book from 'src/model/Book';

const authors:Author[] = [];
authors.push({id:0, name:"Giannoco", books:[]});
authors.push({id:1, name:"Casanovas", books:[]});

export default class Dal implements IDal {
    public addAuthor(author: Author): Promise<void> {
        throw new Error("Method not implemented.");
    }    
    public addBook(book: Book): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public getAuthors(): Promise<Author[]> {
        return new Promise<Author[]>((r, f)=>{
            r(authors);
        });
    }
    public getBooks(): Promise<Book[]> {
        throw new Error("Method not implemented.");
    }
}