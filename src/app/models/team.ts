export class Team {
    _id: string
    name: string
    description: string
    creator: string
    users: string[]
    activities: string[]

    constructor(){
        this._id = '';
        this.name = '';
        this.description = '';
        this.creator = ''
        this.users = [];
        this.activities = [];
    }
}
