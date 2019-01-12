import { observable } from "mobx"
import Author from './Author';

export default class Book {
    @observable public id:number;
    @observable public name:string;
    @observable public edition:Date;
    @observable public authors:Author[] = [];
}