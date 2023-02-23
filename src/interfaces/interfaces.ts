export interface Welcome {
    first_name: string;
    last_name:  string;
    picture:    any;
    status:     string;
    task:       Task;
    department: string;
}

export interface Task {
    title:       string;
    description: string;
}