import { observable } from 'mobx';
import Author from './Author';


export default class CehckableAuthor {

    @observable public checked:boolean;
    @observable public author:Author;
    
    constructor(author: Author) {
        this.author = author;
    }
}