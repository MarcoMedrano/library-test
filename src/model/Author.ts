import { observable } from 'mobx';
import Book from './Book';

export default class Author {
    @observable public id:number = 0;
    @observable public name:string = '';
    @observable public books:Book[] = [];
}