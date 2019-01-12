import IDal from 'src/dal/IDal';
import Dal from 'src/dal/memory/Dal';

import { observable } from 'mobx';
import CehckableAuthor from 'src/model/CehckableAuthor';
import Book from 'src/model/Book';

class AppStore{
    @observable public books: Book[] = [];

    @observable public checkableAuthors: CehckableAuthor[] = [];
    @observable public editingBook: Book = new Book();
    
    private dal: IDal = new Dal();
    
    
    /**
     * getAuthors
     */
    public getAuthors() {
        return this.dal.getAuthors();
    }
    
    public addBook(book:Book){
        this.books.push(book);
        return this.dal.addBook(book);
    }
    
    public buildCheckableAuthors() {
        this.dal.getAuthors().then(authors => {
            this.checkableAuthors = authors.map(a => new CehckableAuthor(a));
            
        });
    }
    
    public loadBooks() {
        this.dal.getBooks().then(books => {
            this.books = books;
        });
    }
}

export default new AppStore()