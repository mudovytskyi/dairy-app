export interface ITask {
    id: number,
    name: string,
    selected: boolean,
    comments: string[]
}

export class Task implements ITask {
    constructor(public id:number, public name:string, public selected:boolean = false, public comments:string[] = []) {
    }
}