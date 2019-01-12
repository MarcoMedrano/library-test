import { observable } from "mobx"
import Author from './Author';

export default class Book {
    @observable public id:number = 0;
    @observable public name:string = '';
    @observable public edition:Date = new Date();
    @observable public authors:Author[] = [];
}