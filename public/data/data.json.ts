import Carlos from '../imgs/Avatar-Carlos-Rubio.png';
import Daniel from '../imgs/Avatar-Daniel-Escobar.png';
import Jonathan from '../imgs/Avatar-Jonathan-Osorio.png';
import Sebastian from '../imgs/Avatar-Sebastian-Nevado.png';
import Edwin from '../imgs/Avatar-Edwin-Lopez.png';
import Luis from '../imgs/Avatar-Luis-Ortiz.png';
import Yowin from '../imgs/Avatar-Yowin-Mera.png';
import Jhoeykol from '../imgs/Avatar-Jhoeykol-Cera.png';
import Fabian from '../imgs/Avatar-Fabian-Garcia.png';
import Gian from '../imgs/Avatar-Gian-Martinez.png'; 

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
export const data:Welcome[]=[
    {
        "first_name": "Jonathan",
        "last_name": "Osorio",
        "picture": Jonathan,
        "status": "online",
        "task":{
            "title": "Task 1",
            "description": "Description 1"
        },
        "department": "IT"
    },
    {
        "first_name": "Daniel",
        "last_name": "Escobar",
        "picture": Daniel,
        "status": "online",
        "task":{
            "title": "Task 1",
            "description": "Description 1"
        },
        "department": "IT"
    },
    {
        "first_name": "Sebastian",
        "last_name": "Nevado",
        "picture": Sebastian,
        "status": "online",
        "task":{
            "title": "Task 1",
            "description": "Description 1"
        },
        "department": "IT"
    },
    {
        "first_name": "Edwin",
        "last_name": "Lopez",
        "picture": Edwin,
        "status": "online",
        "task":{
            "title": "Task 1",
            "description": "Description 1"
        },
        "department": "IT"
    },
    {
        "first_name": "Gian",
        "last_name": "Martinez",
        "picture": Gian,
        "status": "online",
        "task":{
            "title": "Task 1",
            "description": "Description 1"
        },
        "department": "IT"
    },
    {
        "first_name": "Carlos",
        "last_name": "Rubio",
        "picture": Carlos,
        "status": "online",
        "task":{
            "title": "Task 1",
            "description": "Description 1"
        },
        "department": "IT"
    },
    {
        "first_name": "Fabian",
        "last_name": "Garcia",
        "picture": Fabian,
        "status": "online",
        "task":{
            "title": "Task 1",
            "description": "Description 1"
        },
        "department": "IT"
    },
    {
        "first_name": "Yowin",
        "last_name": "Mera",
        "picture": Yowin,
        "status": "online",
        "task":{
            "title": "Task 1",
            "description": "Description 1"
        },
        "department": "IT"
    },
    {
        "first_name": "Jhoeykol",
        "last_name": "Cera",
        "picture": Jhoeykol,
        "status": "online",
        "task":{
            "title": "Task 1",
            "description": "Description 1"
        },
        "department": "IT"
    },
    {
        "first_name": "Luis",
        "last_name": "Ortiz",
        "picture": Luis,
        "status": "online",
        "task":{
            "title": "Task 1",
            "description": "Description 1"
        },
        "department": "IT"
    }
]