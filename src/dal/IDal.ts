import Book from 'src/model/Book';
import Author from './../model/Author';

/**
 * Daata Acces Layer interface, it does centralize the access to all models.
 * It is a contract Facade like, implementation might be divided in multiple
 * sub dal's.
 */
export default interface IDal{

    addAuthor(author:Author): Promise<void>;
    addBook(book:Book): Promise<void>;
    getAuthors(): Promise<Author[]>;
    getBooks(): Promise<Book[]>;

}