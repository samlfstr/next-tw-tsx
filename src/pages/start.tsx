import * as React from 'react';

import CodeBlockCom from '../components/vendor/CodeBlockCom';

// Regular function with children
function FcA({ children }: { children: string }) {
  return <h1 className='mt-3 w-3/5 italic leading-6'>{children}</h1>;
}

export default function Start() {
  const code = `// Define an array of type string
const message: string = 'Hello World';
// Define an array of type number
const num: number = 123;
// Define an array of type boolean
const boolean: boolean = true;
// Define an array of type string[]
const arrayA: string[] = ['Hello', 'World'];
// Define an array of type number[]
const arrayB: [string, number] = ['Hello', 123];
// Define an array of type any[]
const arrayC: any[] = ['Hello', 123, true];
// Define an object of type object
const objectA: object = {message: 'Hello World'};
// Define an object that accepts infinite number of properties
const objectB: {[key: string]: any} = {message: 'Hello World'};
// Define an object of type object with arbitrary properties
const person: {
  name: string,
  age: number,
  isMarried?: boolean,
  address: {
    street: string,
    city: string,
    state: string,
    coutry: string
  }
  // To do a selection using document.getElementById()
  const selection = document.getElementById('selection') as HTMLInputElement;
  // Or again using document.querySelector() we can specify the type of the element
  const selection = < HTMLInputElement >document.querySelector('#selection');
  // Type union to select either string or number
  const fn:Function = (id:string|number) => {
    return id.toString();
  }
   /*          FUNCTION DEFINITIONS          */
  // Function definition with return type void.
  function fn(id:string | number) : void {
    console.log(id);
  }
  // Function definition arrow function with return type void.
  const fn2 = (id:string | number) : void => {
    console.log(id);
  }
  // Arrow function definition using Function keyword.
  const fn3:Function = (id:string | number) : void => {
    console.log(id);
  }
  // Arrow function definition using function keyword.
  const fn4 = function(id:string | number) : void {
    console.log(id);
  }
  // Arrow function with any return type
  const fn5(id:string | number ) : any =>{
    return 'Hello World';
  }
  // Regular function with children
  function fcA({childeren}:{childeren:string}) {
    return <h1>{childeren}</h1>
  }
  // Arrow function with children.
  const fcB:Function = ({childeren}:{childeren:string}) => {
    return <h1>{childeren}</h1>
  }
  // Create a conditional logic based on the value of the id.
  const fn = (id:number|string):any => {
    if(typeof id==="number") {
      return "The return type is a number";
    }
    else {
      return "The return type is a string";
    }
  }
  // Function with two pareters.
  const fn = (messageId:string|number, userId:string|number) =>{
  if (messageId === userId){
    return  123;
  }
  return "sth else";
  }
  // Function that uses instanceof operator.
  const fn2 = (date:string|Date)=> {
    if(date instanceof Date){
      return date.toISOString();
    }
  }
  // Arrow function that uses isArray 
  const fn = (full_name: string | string[]) => {
    if (Array.isArray(full_name)) {
      return full_name.join(' ');
    }
  }
  // Exclamation point tells that a function's return type can not null. 
  const button = document.querySelector('.btn')!;
  //  define a User type with the type keyword :
  type User = {firstname: string, lastname: string};
  // Then use it any where I want to define a user :
  const user:User = { firstname: "Sameul", lastname: "Foster" }
  // Make a function that takes any type of value and returns any type of value. 
function user <UserType>(var:UserType):UserType{
  // Narrowing
  if(var === "number"){
    // It's probably the user ID do sth
  }else if(var === "string"){
    // It's name or address do sth
  }else if(Array.isArray(var)){
     // Deconstruct the array and do sth
  }
}
`;

  return (
    <div className='grid place-items-center'>
      <FcA>
        Line 47 to 53 : childeren basically means that all the value of the
        children are passed to the parent is defined here between tags and not
        in the tags. If you are not careful about the syntax the react will
        consider it as parameter of the function.
      </FcA>
      <CodeBlockCom code={code} language='typescript' />
    </div>
  );
}
