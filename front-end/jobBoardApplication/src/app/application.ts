import { JobPost } from "./job-post";

export interface Application {
    id: number;
    jobPost: JobPost;
    firstName: string;
    lastName: string;
    email: string;
    favoured: boolean;
    cv: File;
}