// reference type => object

const student : {
    firstName: string;
    lastName?: string; //optional type
    readonly roll: number;
    class: string;
    isMarried: boolean;
    college: 'RCPSC'   //literal type  when a value act like type is called literal 
} = {
    firstName: 'sowrov',
    lastName: 'hasan',
    roll: 265,
    class: 'six',
    isMarried:false,
    college: 'RCPSC'
}

console.log(student.lastName);