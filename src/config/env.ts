// If you renamed files to dev.env.ts, qa.env.ts, prod.env.ts
// update imports to include the .ts extension so the resolver finds them.
import { DEV_ENV } from "./dev.env";
import { QA_ENV } from "./qa.env";
import { PROD_ENV } from "./prod.env";  


//enum is a special data type that allows us to define a set of named constants.
//Environment is the name of the enum and it has three values DEV, QA and PROD 
//which are assigned the string values "dev", "qa" and "prod" respectively.

export enum Environment{
    DEV="dev",
    QA="qa",
    PROD="prod"
}

// we can set the environment variable in the command line or in the .env file
//currentEnv is set to QA for now, but we can change it to DEV or PROD as needed.
const currentEnv = Environment.QA as Environment; 
// as is the type script assertion operator which is used to tell
//  the compiler that we are sure about the type of the variable.
// In this case, we are telling the compiler that currentEnv is of type Environment.


// we can use the ternary operator to set the ENV variable based on the 
// current environment
//here currentEnv is compared with Environment.DEV, 
// if it is true then DEV_ENV is assigned to ENV,
// if it is false then it is compared with Environment.QA,
// if it is true then QA_ENV is assigned to ENV, 
// if both are false then PROD_ENV is assigned to ENV.

// this is ternary operator which is used to assign a value to a variable based
// on a condition.

export const ENV =
    currentEnv===Environment.DEV
        ? DEV_ENV
        : currentEnv===Environment.QA
        ? QA_ENV
        : PROD_ENV;


