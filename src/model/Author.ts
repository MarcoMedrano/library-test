import { observable } from 'mobx';
import Book from './Book';

export default class Author {
    @observable public id:number;
    @observable public name:string;
    @observable public books:Book[] = [];
}