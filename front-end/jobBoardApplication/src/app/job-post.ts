import { Company } from "./company";

export interface JobPost {
    id: number;
    title: string;
    company: Company;
    city: string;
    date: Date;
    description: string;
}
