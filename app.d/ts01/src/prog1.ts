////////////////////////////////////////
// - Function as First Class Citizen
// - HOF
// - Curry
// - Lazy Evaluation
// - Memoization
// - Generics
// - Referential Transparency
//     const doctors = readonly<string[]> = ["Mateo","Lucas"]
// - Recursion
//
//
////////////////////////////////////////



//////////////////////////////////////////////
// type Order = {};
// const pipe = (...args: Function[]): Function => {
//     const [f, ...gs] = args;
//     return f(pipe(...gs));
// };
// export const combineCustomerWithOrdersAndFilterHighTotals = (
//     orders: Order[],
//     minTotal: number) => pipe(
//     );

// // ---- identifier --v
// export const findCustomerNamed = 
// 	({ first, last}) => (customers: Customer[]) => 
// 		customers.find(customer => customer.first === first && customer.last === last;
// 		
// // -------- identifier --v
// export const attachAddressForCustomer = 
// 	(address: Address) => (customer: Customer) => 
// 		customer 
// 			? { ...customer, address } 
// 			: null;
// 
// // ----------- identifier --v
// export const findCustomerAndAttachAddress =
// 	 ({first, last, address}) => pipe(
// 		findCustomerNamed({first, last}),
// 		attachAddressForCustomer(address)
// 	);

// // curry
// const pluck = 
//   (paths: ...string[]) =>    // outer
//     (defaults?: ...any[]) => // inner level 1
//       (options?: { ... }) => // inner level 2
//         (obj: any) =>        // inner level 3
//           ...;               // implementation

// immutable
const address = { address: 'Belen 123'};
const customer = { name: 'Jose', profession: 'carpenter'};
const customerWithAddress = { ...customer, address };
console.log(customerWithAddress);
console.log(`---`);
const one = 'one two three';
const oneList = one.split(' ');
console.log(`immutability: original, and splited::  `, one, oneList);
console.log(`---`);


const oneVersion = '2';
const oneCondition = '>1';

const oneResult = (v: string) => (c: string) => ( true ); 


const version = '3.0.4';
const condition = '>=2.0.0,<4.2'

//const isValid = 
//    (v: string) => 
//        (c: string): boolean =>  
//         c.split(',').filter( 
//             condStep =>  condStep.charAt(0) === '<' 
//               ? 
//               :
//             ).length === 0

            
