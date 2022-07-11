import CodeBlockCom from '../components/vendor/CodeBlockCom';

export default function Start() {
  // eslint-disable-next-line
  const code: string = `// Define an array of type string
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
const object: object = {message: 'Hello World'};
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
`;

  return (
    <div className='grid h-screen place-items-center'>
      <CodeBlockCom code={code} language='typescript' />
    </div>
  );
}
