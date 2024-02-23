import Student from './Student.js'
import { ROLE_USER, getDefaultRole } from './RoleConst.js';

function main(){
    let son = new Student(1, "Son", 23, getDefaultRole());
    console.log(son);
}

main();