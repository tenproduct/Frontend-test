import { Person } from "./person.model";

export interface ResultData {
    count: number,
    next: string,
    previous: string | null
    results: Array<Person>
}
