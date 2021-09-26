
export interface Base {
    id: number
}

export interface Employee extends Base {
    fullName: string;
    deptName: string;
    designationName: string;
    description: string;
    imgUrl: string;
}