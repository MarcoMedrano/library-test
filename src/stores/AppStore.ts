import IDal from 'src/dal/IDal';
import Dal from 'src/dal/memory/Dal';

import { observable } from 'mobx';
import CehckableAuthor from 'src/model/CehckableAuthor';
import Book from 'src/model/Book';

class AppStore{
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
        return this.dal.addBook(book);
    }

    public buildCheckableAuthors() {
            this.dal.getAuthors().then(authors => {
                this.checkableAuthors = authors.map(a => new CehckableAuthor(a));
                
            });
    }
}

export default new AppStore()