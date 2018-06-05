export interface ITask {
    _id: number,
    name: string,
    selected: boolean,
    comments: string[]
}

export class Task implements ITask {
    constructor(public _id:number, public name:string, public selected:boolean = false, public comments:string[] = []) {
    }
}