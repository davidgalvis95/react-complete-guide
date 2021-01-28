// =============================================================
// 3th section // BASICS OF REACT
// =============================================================
//
// import React, { Component } from 'react';
// // import React, { useState } from 'react';
// import './App.css';
// // import Person from './Person/Person'
// import UserOutput from './UserOutput/UserOutput'
// import UserInput from './UserInput/UserInput'

// class App extends Component {
//   //This' a special property we can define in components that extends Component,
//   //we cannot define that one in Person.js for example because it does not extends Component, there we should use const
//   //but here we can define a state that holds the properties we will inject into the component from the outside of that

//   //Starting from React 16.8 we can manage state from functional components
//   //state is a reserved word
//   state = {
//     persons :[
//       { name: 'David', age: 25},
//       { name: 'Paula', age: 23},
//       { name: 'Daniel', age: 23},
//     ],
//     otherState: 'some other value'
//   }
//   // IF THE state changes or the props changes, React analyzes the code and re-render it into the DOM considering those changes
// //lets say we wanna add an argument to the function and pass it into the Person component
//   switchNameHandler = (newName) => {
//     // console.log('was clicked!');
//     // here using the this keyword won't work since it wont call to the component but to the function 
//     this.setState({
//       persons :[
//         { name: 'David G', age: 21},
//         { name: 'Paula M', age: 19},
//         { name: newName, age: 19},
//       ],
//      })
//   }

//   nameChangedHandler = (event) => {
//     // console.log('was clicked!');
//     // here using the this keyword won't work since it wont call to the component but to the function 
//     this.setState({
//       persons :[
//         { name: 'David G', age: 21},
//         { name: event.target.value, age: 19},
//         { name: 'Daniel XX', age: 19},
//       ],
//      })
//   }

//   render() {

//     const style = {
//       backgroundColor: 'white',
//       font: 'inherit',
//       border: '1x solid blue',
//       padding: '8px',
//       cursor: 'pointer'
//     };

//     return (
//       // since class is a reserved keyword of React we now use className
//       //Generally speaking we cannot write JSX outside the main component or main <div>, is better to do that in the inside of that
//       <div className="App">
//         <h1>Hello im react</h1>
//         {/* here Im passing a reference of the cuntion we have created, is very important to not pass it with parentheses due that it will execute the function
//         right away when the DOM renders, and we do not want it to happen */}
//         {/* in JSX the onclick is with capital C */}
//         {/* There are 2 ways of syntactically invoke the method with arguments, one is by using bind and the other by using an arrow function */}
//         {/* in the bind, the this refers to the component and the function itself, is a syntax that we need to investigate */}
//         <button style={style} onClick={this.switchNameHandler.bind(this, 'Daniel G')}>Switch name</button>
//         {/* here we are passing  attributes to the component that we've created*/}
//         {/* <Person name="David" age="25"/>
//         <Person name="Paula" age="23">My hobbies: study english</Person>
//         <Person name="Daniel" age="23"/> */}
//         {/* here are the properties that we'll inject from the outside */}
//         <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
//         {/* To pass it as an argument we can make use of a property and pass the method as a reference into the Person component*/}
//         {/* There are 2 ways of syntactically invoke the method with arguments, one is by using bind and the other by using an arrow function */}
//         <Person 
//         name={this.state.persons[1].name}  
//         age={this.state.persons[1].age} 
//         click={() => this.switchNameHandler('Daniel Galvis')} 
//         changed={this.nameChangedHandler} >
//           My hobbies: study english
//           </Person>
//         <Person name={this.state.persons[2].name}  age={this.state.persons[2].age} />
//       </div>
//     );
//     // this is the same than above, this is used to create JSX but using the react syntax
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
//   }
// }

// export default App;
//this is the other way to get functionality in "functional components" is by using hooks
//in this case we are adding a useState hook, that allows to make a state out of an object, however different than the 
//class based components, here the useState method does not merge all the new state changes with the old one, instead it replaces what is already there
//hence, here what we have to do is either to bring up the whole old state or change it all, or maybe create multiple useState for each case
// const app = props => {
//   //here we are using destructuring to save the 2 objects that this useState creates this two objects, one that stores the
//   //actual state and the other that stores the new way to set the state up
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Stephanie', age: 26 }
//     ]
//   });

//   const [otherState, setOtherState] = useState('some other value');

//   console.log(personsState, otherState);

//   const switchNameHandler = () => {
//     // console.log('Was clicked!');
//     // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
//     // here we update the part of the array that sets the new state for the person
//     setPersonsState({
//       persons: [
//         { name: 'Maximilian', age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: 'Stephanie', age: 27 }
//       ]
//     });
//   };

//   //there is where we can call the new objects that come from the useState and set them up
//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <p>This is really working!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       />
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}
//       >
//         My Hobbies: Racing
//       </Person>
//       <Person
//         name={personsState.persons[2].name}
//         age={personsState.persons[2].age}
//       />
//     </div>
//   );
//   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
// };

// export default app;

// =============================================================
// 1ST ASSIGNMENT
// =============================================================

// class App extends Component {
//
//   state = {
//     username : 'David G'
//   }
//
//   changeName = (event) => {
//     this.setState({
//       username : event.target.value
//      })
//   }
//
//   render() {
//
//     const style = {
//       backgroundColor: 'red',
//       font: 'inherit',
//       border: '1x solid blue',
//       padding: '8px',
//       cursor: 'pointer'
//     };
//
//     return (
//
//       <div className="App">
//         <h1>1ST ASSIGNMENT</h1>
//         <button style={style}>Switch name</button>
//         <UserOutput style={style} name={this.state.username} />
//         <UserOutput name='David2'> </UserOutput>
//         <UserOutput name='David3'/>
//         <UserInput input_change={this.changeName} name={this.state.username}/>
//       </div>
//     );
//   }
// }
//
// export default App;


// =============================================================
// 4th section // WORKING WITH CONDITIONALS
// =============================================================
// import React, {Component} from 'react';
// import './App.css';
// import Person from './Person/Person'
//
//
// class App extends Component {
//
//     state = {
//         persons: [
//             {name: 'David', age: 25},
//             {name: 'Paula', age: 23},
//             {name: 'Daniel', age: 23},
//         ],
//         otherState: 'some other value',
//         showPersons: false
//     }
//
//     switchNameHandler = (newName) => {
//         this.setState({
//             persons: [
//                 {name: 'David G', age: 21},
//                 {name: 'Paula M', age: 19},
//                 {name: newName, age: 19},
//             ],
//         })
//     }
//
//     nameChangedHandler = (event) => {
//         this.setState({
//             persons: [
//                 {name: 'David G', age: 21},
//                 {name: event.target.value, age: 19},
//                 {name: 'Daniel XX', age: 19},
//             ],
//         })
//     }
//     //The following method toggles the boolean variable by modifying the state
//     togglePersonHandler = () => {
//         const doesShow =  this.state.showPersons;
//         this.setState({showPersons: !doesShow})
//     }
//
//     render() {
//
//         const style = {
//             backgroundColor: 'white',
//             font: 'inherit',
//             border: '1x solid blue',
//             padding: '8px',
//             cursor: 'pointer'
//         };
//
//         let persons = null;
//
//         //displays the html if the showPersons is set in the state as true
//         if(this.state.showPersons){
//             persons = (
//                 <div>
//                     <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
//                     <Person
//                         name={this.state.persons[1].name}
//                         age={this.state.persons[1].age}
//                         click={() => this.switchNameHandler('Daniel Galvis')}
//                         changed={this.nameChangedHandler}>
//                         My hobbies: study english
//                     </Person>
//                     <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
//                 </div>
//             )
//         }
//
//         return (
//             <div className="App">
//                 <h1>Hello im react</h1>
//                 {/*<button style={style} onClick={this.switchNameHandler.bind(this, 'Daniel G')}>Switch name</button>*/}
//                 <button style={style} onClick={this.togglePersonHandler}>Switch name</button>
//                 {/*Here we use the state boolean variable to toggle the html that contains the persons
//                 through the ternary operator usage, thus seizing the JS properties, if the variable is false then it wont display anything*/}
//                 {/*{this.state.showPersons ? <div>*/}
//                 {/*    <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>*/}
//                 {/*    <Person*/}
//                 {/*        name={this.state.persons[1].name}*/}
//                 {/*        age={this.state.persons[1].age}*/}
//                 {/*        click={() => this.switchNameHandler('Daniel Galvis')}*/}
//                 {/*        changed={this.nameChangedHandler}>*/}
//                 {/*        My hobbies: study english*/}
//                 {/*    </Person>*/}
//                 {/*    <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>*/}
//                 {/*</div> : null}*/}
//
//                 {/*This is the html that is configured to be displayed and toggled */}
//                 {persons}
//             </div>
//         );
//     }
// }
//
// export default App;

// =============================================================
// 4th section // WORKING WITH LISTS
// =============================================================

// import React, {Component} from 'react';
// import './App.css';
// import Person from './Person/Person'
//
//
// class App extends Component {
//
//     state = {
//         persons: [
//             {id:'aaa11', name: 'David', age: 25},
//             {id:'bbb22', name: 'Paula', age: 23},
//             {id:'ccc33', name: 'Daniel', age: 23},
//         ],
//         otherState: 'some other value',
//         showPersons: false
//     }
//
//     nameChangedHandler = (event, id) => {
//         const personIndex = this.state.persons.findIndex( person => {
//             return person.id === id;
//         })
//
//         const person = { ...this.state.persons[personIndex]};
//         // const person = Object.assign({}, this.state.persons[personIndex]);
//
//         person.name = event.target.value;
//         const persons = [...this.state.persons]
//         persons[personIndex] =person;
//
//         this.setState({persons: persons})
//     }
//     //The following method toggles the boolean variable by modifying the state
//     togglePersonHandler = () => {
//         const doesShow =  this.state.showPersons;
//         this.setState({showPersons: !doesShow})
//     }
//
//     //while the following approach deletes the index-selected element from an array, if the field is in the state
//     //like in this case, is not recommended since it will affect the main variable and will result in some conflicts
//     //then is better to create a copy of the variable, modify it and then assign it again to the main variable
//     deletePersonHandler = (personIndex) =>{
//         // const persons = this.state.persons;
//         //what was previously required can be achieved by slicing the original object, or by using the spread operator
//         // const persons = this.state.persons.slice();
//         const persons = [...this.state.persons];
//         persons.splice(personIndex,1);
//         this.setState({persons: persons})
//     }
//
//     render() {
//
//         const style = {
//             backgroundColor: 'white',
//             font: 'inherit',
//             border: '1x solid blue',
//             padding: '8px',
//             cursor: 'pointer'
//         };
//
//         let persons = null;
//
//
//         if(this.state.showPersons){
//             // if we want to display an array, then is better to have and id, otherwise we will get that the key is missing
//             //because react is not human, so it won't recognize well what is the element we're talking about, to do so and recognize it well, it's needed the key
//             persons = (
//                 <div>
//
//                     {this.state.persons.map( (person,index) => {
//                     return <Person
//                         click={() => this.deletePersonHandler(index)}
//                         name={person.name}
//                         age={person.age}
//                         //we can assign the key as the index which in this case is convenient, or like in the real life case by a previously created id, that's coming from db*/}
//                         //*key={index}
//                         key={person.id}
//                         //here we are passing an event to the component so that it does some actions
//                         changed={(event) => this.nameChangedHandler(event, person.id)}
//                     />;
//                     })}
//                 </div>
//             )
//         }
//
//         return (
//             <div className="App">
//                 <h1>Hello im react</h1>
//                 {/*<button style={style} onClick={this.switchNameHandler.bind(this, 'Daniel G')}>Switch name</button>*/}
//                 <button style={style} onClick={this.togglePersonHandler}>Show Persons</button>
//                 {/*Here we use the state boolean variable to toggle the html that contains the persons
//                 through the ternary operator usage, thus seizing the JS properties, if the variable is false then it wont display anything*/}
//                 {/*{this.state.showPersons ? <div>*/}
//                 {/*    <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>*/}
//                 {/*    <Person*/}
//                 {/*        name={this.state.persons[1].name}*/}
//                 {/*        age={this.state.persons[1].age}*/}
//                 {/*        click={() => this.switchNameHandler('Daniel Galvis')}*/}
//                 {/*        changed={this.nameChangedHandler}>*/}
//                 {/*        My hobbies: study english*/}
//                 {/*    </Person>*/}
//                 {/*    <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>*/}
//                 {/*</div> : null}*/}
//
//                 {/*This is the html that is configured to be displayed and toggled */}
//                 {persons}
//             </div>
//         );
//     }
// }
//
// export default App;

// =============================================================
// 4th section // ASSIGNMENT 2
// =============================================================

// import React, {Component} from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import './App.css';
// import ValidationComponent from './ValidationComponent/ValidationComponent';
// import CharComponent from './CharComponent/CharComponent';
//
//
// class App extends Component {
//
//     state = {
//         textLength: 0,
//         word: [],
//         phrase: '',
//     }
//
//     displayTextLength = (event) => {
//         const word = event.target.value;
//         const length = word.length;
//         const splitWord = word.split('');
//         const wordCharsArray = [];
//
//         splitWord.forEach( char => {
//             let element = this.buildElement(char, uuidv4())
//             wordCharsArray.push(element);
//         })
//
//         // console.log(wordCharsArray)
//         this.setState({textLength: length, word: wordCharsArray, phrase:word})
//     }
//
//     buildElement = (char, id) => {
//         const element = {id:id, letter:char};
//         return element;
//     }
//
//     removeCharFromText = (id) =>{
//         const wordArray = [...this.state.word];
//         const charIndex = wordArray.findIndex( element => element.id === id)
//         wordArray.splice(charIndex,1);
//         console.log(wordArray)
//         const arrCopyOfWord = [];
//         wordArray.forEach( element => arrCopyOfWord.push(element.letter))
//         // console.log(newPhrase)
//         this.setState({word: wordArray, textLength: wordArray.length, phrase:arrCopyOfWord.join('')})
//     }
//
//     render() {
//
//
//         let finalWordArray = null;
//         if(this.state.textLength > 0){
//             finalWordArray = this.state.word.map((charObj) => {
//                 return <CharComponent characterToDisplay={charObj.letter} key={charObj.id} click={() => this.removeCharFromText(charObj.id)}></CharComponent>
//             })
//         }
//
//
//         let componentX = (
//             <div>
//                 <ValidationComponent
//                     changed={(event) => this.displayTextLength(event)}
//                     textLength={this.state.textLength}
//                     phrase={this.state.phrase}
//                 ></ValidationComponent>
//                 {finalWordArray}
//             </div>
//
//         );
//
//         return (
//             <div className="App">
//                 <h1>Assignment 2</h1>
//                 {componentX}
//             </div>
//         );
//     }
// }
//
// export default App;

// =============================================================
// 5th section // STYLING REACT COMPONENTS AND ELEMENTS
// =============================================================

// import React, {Component} from 'react';
// import './App.css';
// // import Radium, {StyleRoot} from"radium";
// import styled from 'styled-components';
// import Person from './Person/Person'
//
// //here we do as in the person component where we styled the div using the styled-components
// //to do so, to make it work we have to write normal css code removing quotes camelCase and replacing comas by semicolons, adding the & to the hover
// //due that what is enclosed in the backticks is just an string, later on this component will replace the actual button below
// const StyledButton = styled.button`
//   //background-color: green;
//   //in the following lines we are adding the behavior that this button has before when toggling by persons or not, when the color changed
//   //that's achieved because we have defined a property 'alt' that holds the state.persons.showPersons
//   background-color: ${props => props.alt ? 'green' : 'red'};
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
//   &:hover {
//     //background-color:lightgreen;
//     //also this dynamic behavior can be applied here
//     background-color:${props => props.alt ? 'lightgreen' : 'salmon'};;
//     color: white
//   }
// `;
//
// class App extends Component {
//
//     state = {
//         persons: [
//             {id:'aaa11', name: 'David', age: 25},
//             {id:'bbb22', name: 'Paula', age: 23},
//             {id:'ccc33', name: 'Daniel', age: 23},
//         ],
//         otherState: 'some other value',
//         showPersons: false
//     }
//
//     nameChangedHandler = (event, id) => {
//         const personIndex = this.state.persons.findIndex( person => {
//             return person.id === id;
//         })
//
//         const person = { ...this.state.persons[personIndex]};
//
//         person.name = event.target.value;
//         const persons = [...this.state.persons]
//         persons[personIndex] =person;
//
//         this.setState({persons: persons})
//     }
//
//     togglePersonHandler = () => {
//         const doesShow =  this.state.showPersons;
//         this.setState({showPersons: !doesShow})
//     }
//
//     deletePersonHandler = (personIndex) =>{
//         const persons = [...this.state.persons];
//         persons.splice(personIndex,1);
//         this.setState({persons: persons})
//     }
//
//     render() {
//
//         const style = {
//             backgroundColor: 'green',
//             font: 'inherit',
//             border: '1x solid blue',
//             padding: '8px',
//             cursor: 'pointer',
//             ':hover':{
//                 backgroundColor:'lightgreen',
//                 color: 'white'
//             }
//         };
//
//         let persons = null;
//
//
//         if(this.state.showPersons){
//             persons = (
//                 <div>
//
//                     {this.state.persons.map( (person,index) => {
//                     return <Person
//                         click={() => this.deletePersonHandler(index)}
//                         name={person.name}
//                         age={person.age}
//                         key={person.id}
//                         changed={(event) => this.nameChangedHandler(event, person.id)}
//                     />;
//                     })}
//                 </div>
//             )
//
//             // style.backgroundColor= 'red';
//             // style[":hover"] = {
//             //     backgroundColor: 'salmon',
//             //     color: 'white'
//             // }
//         }
//
//         // let classes = ['red', 'bold'].join(' ');
//         let classes = [];
//
//         if(this.state.persons.length <= 2){
//             classes.push('red')//classes will be red only
//         }
//         if(this.state.persons.length <= 1){
//             classes.push('bold') //classes = ['red', 'bold']
//         }
//
//         return (
//             //this is the component needed to wrap the app when working when media queries and Radium
//             // <StyleRoot>
//                 <div className="App">
//                     <h2 className={classes.join(' ')}>This is really working</h2>
//                     {/*<button style={style} onClick={this.togglePersonHandler}>Show Persons</button>*/}
//                     {/*the state.showPersons is passed as a property into the StyledButton component to make a dynamic behavior*/}
//                     <StyledButton alt={this.state.showPersons} onClick={this.togglePersonHandler}>Show Persons</StyledButton>
//                     {persons}
//                 </div>
//             // </StyleRoot>
//         );
//     }
// }
//
// //here we are wrapping a component into an imported component so that the extra functionality gets added into the App component
// //we can do this in components extending from Component or in the functional components
// // export default Radium(App);
// export default App;

// =============================================================
// 5th section // STYLING REACT COMPONENTS AND ELEMENTS == BACK INTO CSS MODULES
// =============================================================
//
//
// import React, {Component} from 'react';
// //with that new feature the classes will be imported as a properties of an object
// import classes  from './App.css';
// import Person from './Person/Person'
//
//
// class App extends Component {
//
//     state = {
//         persons: [
//             {id:'aaa11', name: 'David', age: 25},
//             {id:'bbb22', name: 'Paula', age: 23},
//             {id:'ccc33', name: 'Daniel', age: 23},
//         ],
//         otherState: 'some other value',
//         showPersons: false
//     }
//
//     nameChangedHandler = (event, id) => {
//         const personIndex = this.state.persons.findIndex( person => {
//             return person.id === id;
//         })
//
//         const person = { ...this.state.persons[personIndex]};
//
//         person.name = event.target.value;
//         const persons = [...this.state.persons]
//         persons[personIndex] =person;
//
//         this.setState({persons: persons})
//     }
//
//     togglePersonHandler = () => {
//         const doesShow =  this.state.showPersons;
//         this.setState({showPersons: !doesShow})
//     }
//
//     deletePersonHandler = (personIndex) =>{
//         const persons = [...this.state.persons];
//         persons.splice(personIndex,1);
//         this.setState({persons: persons})
//     }
//
//     render() {
//
//         let persons = null;
//         // let btnClass = [classes.Button];
//         let btnClass = '';
//
//         if(this.state.showPersons){
//             persons = (
//                 <div>
//
//                     {this.state.persons.map( (person,index) => {
//                         return <Person
//                             click={() => this.deletePersonHandler(index)}
//                             name={person.name}
//                             age={person.age}
//                             key={person.id}
//                             changed={(event) => this.nameChangedHandler(event, person.id)}
//                         />;
//                     })}
//                 </div>
//             )
//
//             // style.backgroundColor= 'red';
//             // style[":hover"] = {
//             //     backgroundColor: 'salmon',
//             //     color: 'white'
//             // }
//
//             // btnClass.push(classes.Red)
//             btnClass = classes.Red;
//         }
//
//         // let classes = ['red', 'bold'].join(' ');
//         let assignedClasses = [];
//
//         if(this.state.persons.length <= 2){
//             // assignedClasses.push('red')//classes will be red only
//             assignedClasses.push(classes.red)//classes will be red only
//         }
//         if(this.state.persons.length <= 1){
//             assignedClasses.push(classes.bold) //classes = ['red', 'bold']
//         }
//
//         return (
//             //this is the component needed to wrap the app when working when media queries and Radium
//
//             // <div className="App">
//             <div className={classes.App}>
//                 <h2 className={assignedClasses.join(' ')}>This is really working</h2>
//                 {/*<button className="Button" onClick={this.togglePersonHandler}>Show Persons</button>*/}
//                 {/*<button className={btnClass.join(' ')} onClick={this.togglePersonHandler}>Show Persons</button>*/}
//                 <button className={btnClass} onClick={this.togglePersonHandler}>Show Persons</button>
//                 {persons}
//             </div>
//         );
//     }
// }
//
// export default App;

// =============================================================
// 6th section // REACT DEBUGGING
// =============================================================

//
// import React, {Component} from 'react';
// //with that new feature the classes will be imported as a properties of an object
// import classes  from './App.css';
// import Person from '../components/Persons/Person/Person'
// import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
//
//
// class App extends Component {
//
//     state = {
//         persons: [
//             {id:'aaa11', name: 'David', age: 25},
//             {id:'bbb22', name: 'Paula', age: 23},
//             {id:'ccc33', name: 'Daniel', age: 23},
//         ],
//         otherState: 'some other value',
//         showPersons: false
//     }
//
//     nameChangedHandler = (event, id) => {
//         const personIndex = this.state.persons.findIndex( person => {
//             return person.id === id;
//         })
//
//         const person = { ...this.state.persons[personIndex]};
//
//         person.name = event.target.value;
//         const persons = [...this.state.persons]
//         persons[personIndex] =person;
//
//         this.setState({persons: persons})
//     }
//
//     togglePersonHandler = () => {
//         const doesShow =  this.state.showPersons;
//         this.setState({showPersons: !doesShow})
//     }
//
//     deletePersonHandler = (personIndex) =>{
//         const persons = [...this.state.persons];
//         persons.splice(personIndex,1);
//         this.setState({persons: persons})
//     }
//
//     render() {
//
//         let persons = null;
//         // let btnClass = [classes.Button];
//         let btnClass = '';
//
//         if(this.state.showPersons){
//             persons = (
//                 <div>
//                     {this.state.persons.map( (person,index) => {
//                         //The key has to be moved to the outer element in a map method because that's the element now that we are replicating
//                         //so it has to be moved from person to the ErrorBoundary in order to replicate it
//                         return <ErrorBoundary key={person.id}>
//                             <Person
//                             click={() => this.deletePersonHandler(index)}
//                             name={person.name}
//                             age={person.age}
//                             changed={(event) => this.nameChangedHandler(event, person.id)}
//                             />
//                         </ErrorBoundary>;
//                     })}
//                 </div>
//             )
//
//             // style.backgroundColor= 'red';
//             // style[":hover"] = {
//             //     backgroundColor: 'salmon',
//             //     color: 'white'
//             // }
//
//             // btnClass.push(classes.Red)
//             btnClass = classes.Red;
//         }
//
//         // let classes = ['red', 'bold'].join(' ');
//         let assignedClasses = [];
//
//         if(this.state.persons.length <= 2){
//             // assignedClasses.push('red')//classes will be red only
//             assignedClasses.push(classes.red)//classes will be red only
//         }
//         if(this.state.persons.length <= 1){
//             assignedClasses.push(classes.bold) //classes = ['red', 'bold']
//         }
//
//         return (
//             //this is the component needed to wrap the app when working when media queries and Radium
//
//             // <div className="App">
//             <div className={classes.App}>
//                 <h2 className={assignedClasses.join(' ')}>This is really working</h2>
//                 {/*<button className="Button" onClick={this.togglePersonHandler}>Show Persons</button>*/}
//                 {/*<button className={btnClass.join(' ')} onClick={this.togglePersonHandler}>Show Persons</button>*/}
//                 <button className={btnClass} onClick={this.togglePersonHandler}>Show Persons</button>
//                 {persons}
//             </div>
//         );
//     }
// }
//
// export default App;

// =============================================================
// 7th section // DIVING DEEPER INTO COMPONENTS & REACT INTERNALS
// =============================================================

//
import React, {Component} from 'react';
//with that new feature the classes will be imported as a properties of an object
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import WithClass from '../hoc/WithClass'
import Aux from '../hoc/Aux'
import withClassWrapperFunction from '../hoc/withClassWrapperFunction'
import AuthContext from '../context/auth-context'


class App extends Component {

    constructor(props) {
        super(props);
        console.log("[App.js constructor]")
        //The following was the old way of getting things up fot initializing, however nowadays there is a way to initialize, juts by calling the variable
        // which automatically initializes the constructor and under the hood creates it
        // this.state = {
        //     persons: [
        //         {id: 'aaa11', name: 'David', age: 25},
        //         {id: 'bbb22', name: 'Paula', age: 23},
        //         {id: 'ccc33', name: 'Daniel', age: 23},
        //     ],
        //     otherState: 'some other value',
        //     showPersons: false
        // }
    }

    state = {
        persons: [
            {id: 'aaa11', name: 'David', age: 25},
            {id: 'bbb22', name: 'Paula', age: 23},
            {id: 'ccc33', name: 'Daniel', age: 23},
        ],
        otherState: 'some other value',
        showPersons: false,
        showCockpit: true,
        changeCounter: 0,
        authenticated:false
    }

    //if we have some scenario when props of the component can change or an internal state can do it,
    //this is the hook to use sync the state (don't send HTTP requests here)
    //this needs to be static in order to work
    static getDerivedStateFromProps(props, state){
        console.log("[App.js getDerivedStateFromProps]", props)
        return state;
    }

    //deprecated
    // componentWillMount() {
    //     console.log("[App.js componentWillMount]")
    // }

    //cause side effects, e.g. here is when we can do HTTP requests for getting new data,
    // never try to change state unless we change the state asynchronously, never try to do right away
    //does not need to be static
    componentDidMount() {
        console.log("[App.js componentDidMount]");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("[App.js shouldComponentUpdate]")
        //This returns whether the component should be updated or not, but based in a previous logic
        //The logic for example should check whether the prev props are different from the next ones and update if it's the case
        //if we do a return false then the component will never be updated, in this case tha button toggling that shows persons will never work
        //cause this false will hinder the updating when calling the setState
        //return false
        return true;
    }

    //Takes a snapshot of the component before updating, is used not so frequently, but when used is used in last-minute DOM operations
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[App.js getSnapshotBeforeUpdate]")
        //here we are capturing the snapshot cause its required OTHERWISE WILL
        return { message: 'app.js SNAPSHOT!'}
    }

    //verifies and gets a response of whether the component was updated, here we can cause side effects, do not update the state synchronously here
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[App.js componentDidUpdate]");
        console.log(snapshot)
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(person => {
            return person.id === id;
        })
        //Arrays, Objects are passed by reference, then to modify them correctly we need to assign it into a new variable
        //so that it points into a new reference in memory
        const person = {...this.state.persons[personIndex]};

        person.name = event.target.value;
        const persons = [...this.state.persons]
        persons[personIndex] = person;

        //We can call setState synchronously but is not guaranteed that it will execute immediately. If there are multiple setStates that alter
        // the state and they occur simultaneously,then we can have trouble with the old way, therefore when we are depending on the old state
        // (e.g altering a counter) the way to update it is
        this.setState((prevState, props) => {
            return {
              persons: persons,
              changeCounter: prevState.changeCounter + 1
            };
        });
    };


    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    }

    loginHandler = () => {
        this.setState({authenticated:true});
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }

    render() {
        console.log("[App.js render]")
        let persons = null;

        if (this.state.showPersons) {
            //The changed property acts as a update prop, since it updates the name which is a property of Person,
            // then it call to the update lifecycle in the Persons component which encloses Person
            //Everything that gets updated inside Persons is managed by that hook
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
                        isAuthenticated={this.state.authenticated}
                    />
                </div>
            )
        }

        return (
            // <div className={classes.App}>
            //here we are using a hoc component to return the same object and enclosing it at root level
            // <WithClass classes={classes.App}>
            //     {/*The following button as the showCockpit state variable was added in order to simulate the destruction of the Cockpit component
            //     and make the useEffect cleanup to work ok*/}
            //     <button onClick={() => {
            //         this.setState({showCockpit:false})
            //     }}>Remove Cockpit</button>
            //
            //     {this.state.showCockpit?<Cockpit
            //         title={this.props.appTitle}
            //         showPersons={this.state.showPersons}
            //         clicked={this.togglePersonHandler}
            //         persons={this.state.persons}
            //     />:null}
            //     {persons}
            // </WithClass>

            <Aux>
                {/*The following button as the showCockpit state variable was added in order to simulate the destruction of the Cockpit component
                    and make the useEffect cleanup to work ok*/}
                <button onClick={() => {
                    this.setState({showCockpit:false})
                }}>Remove Cockpit</button>
                {/*React will only re render when only state or props change, only changing thins in a context object will no cause the re-render cycle
                Hence we are passing the authentication state as a property to the component so that whenever that state updates, the property of the context
                also does and then it updates the DOM*/}
                {/*This context can be accessed by cockpit and persons because they are in the provider wrapper*/}
                <AuthContext.Provider
                    value={{
                        authenticated: this.state.authenticated,
                        login: this.loginHandler
                    }}
                >
                    {this.state.showCockpit?<Cockpit
                        title={this.props.appTitle}
                        showPersons={this.state.showPersons}
                        clicked={this.togglePersonHandler}
                        persons={this.state.persons}
                        //{/*here we pass a method reference into persons to be executed when a button is clicked*/}
                        //{/*We do not need to pass the login handler anymore since the logins reference to this method is now managed by the Context component
                        //in its properties that can be inherited by the components that are wrapped into it*/}
                        // login={this.loginHandler}
                    />:null}
                    {persons}
                </AuthContext.Provider>
            </Aux>
        );
    }
}
//We can use many ways to wrap components, however this one is recommended when we need to perform some analytics or
// error handling in the component and need to wrap it
export default withClassWrapperFunction(App, classes.App);