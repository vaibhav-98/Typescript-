/**  Types in typesScript
 * 
 * Below are all primitive types in TS
 * 
 * 
 *   string → storew text
 *   number → integer , real
 *   boolen
 *   undefine 
 *   null 
 *   bigint
 *   symbol
 * 
 *   var<variable_name> : number = <value> // type annotation 
 * 
 */



let id: number = 5
let firstName = "Sanket" ; // TS understands firstName will store  string 
// firstName = 12; TSC throws error 
var lastName: string = "sanket";
// lastName = 13; TSC throws error 
console.log(id, firstName)



/**
 * Union of types 
 */

let userId: number | string = "26"
userId = 10;

