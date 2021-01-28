
// ================================================================================
// SECTION 1 TO 5 BASICS OF REACT
// ================================================================================
// import React from 'react';
// // import Radium from "radium";
// import styled from 'styled-components';
// import './Person.css';
//
// //here is a way of generating some styling so that we get the styles generated automatically in the head of the html document
// const StyledDiv = styled.div`
//
//     width: 60%;
//     margin: auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #eee;
//     padding: 16px;
//     text-align: center;
//
//   @media (min-width: 500px) {
//     width: 450px;
//   }
// `;
//
// const person = (props) => {
//
//     //here we are using the media query to style depending on the screen size, but instead of doing this in a separate css file we do this in the same component
//     //to these media queries is also needed to wrap the entire application in a component the StyleRoot one (look at app.js)
//     // const style = {
//     //     '@media (min-width: 500px)':{
//     //         width: '450px'
//     //     }
//     // }
//     // return <p>Im {props.name} and Im {Math.floor(Math.random * 30 )} years old</p>
//     //The props are the attributes we set in the component so that it generates dynamically
//     return (
//         // <div className="Person" style={style}>
//         //we have previously generated the styleDiv component which holds all the styles and now we are generating that styledDiv here which replaces
//         //the old way of styling components
//         <StyledDiv onClick={props.click}>
//             <p>Im {props.name} and Im {props.age} years old</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name}></input>
//         </StyledDiv>
//         // </div>
//     )
// };
//
// // export default Radium(person);
// export default person;


// ================================================================================
// SECTION 6 DEBUGGING REACT APPLICATIONS
// ================================================================================
//
// import React from 'react';
// // import Radium from "radium";
// import styled from 'styled-components';
// import './Person.css';
//
// //here is a way of generating some styling so that we get the styles generated automatically in the head of the html document
// const StyledDiv = styled.div`
//
//     width: 60%;
//     margin: auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #eee;
//     padding: 16px;
//     text-align: center;
//
//   @media (min-width: 500px) {
//     width: 450px;
//   }
// `;
//
// const person = (props) => {
//
//     const rnd = Math.random();
//
//     if(rnd > 0.7) {
//         throw new Error('something went wrong')
//     }
//     //here we are using the media query to style depending on the screen size, but instead of doing this in a separate css file we do this in the same component
//     //to these media queries is also needed to wrap the entire application in a component the StyleRoot one (look at app.js)
//     // const style = {
//     //     '@media (min-width: 500px)':{
//     //         width: '450px'
//     //     }
//     // }
//     // return <p>Im {props.name} and Im {Math.floor(Math.random * 30 )} years old</p>
//     //The props are the attributes we set in the component so that it generates dynamically
//     return (
//         // <div className="Person" style={style}>
//         //we have previously generated the styleDiv component which holds all the styles and now we are generating that styledDiv here which replaces
//         //the old way of styling components
//         <StyledDiv onClick={props.click}>
//             <p>Im {props.name} and Im {props.age} years old</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name}></input>
//         </StyledDiv>
//         // </div>
//     )
// };
//
// // export default Radium(person);
// export default person;

// ================================================================================
// SECTION 7th DIVING DEEPER INTO COMPONENTS
// ================================================================================

// import React from 'react';
// import styled from 'styled-components';
// import './Person.css';
//
// const StyledDiv = styled.div`
//
//     width: 60%;
//     margin: auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #eee;
//     padding: 16px;
//     text-align: center;
//
//   @media (min-width: 500px) {
//     width: 450px;
//   }
// `;
//
// const person = (props) => {
//     console.log("[Person.js render]")
//     return (
//         <StyledDiv>
//             <p onClick={props.click}>Im {props.name} and Im {props.age} years old</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name}></input>
//         </StyledDiv>
//     )
// };
//
// export default person;

// ================================================================================
// SECTION 7th DIVING DEEPER INTO COMPONENTS -- CONVERTING PERSON INTO A CLASS BASED COMPONENT
// ================================================================================

import React,{Component} from 'react';
import styled from 'styled-components';
import './Person.css';
import classes from './Person.css'
import Aux from '../../../hoc/Aux'
import withClassWrapperFunction from '../../../hoc/withClassWrapperFunction'
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-context'

// const StyledDiv = styled.div`
//
//     width: 60%;
//     margin: auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #eee;
//     padding: 16px;
//     text-align: center;
//
//   @media (min-width: 500px) {
//     width: 450px;
//   }
// `;

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated)
    }

    render() {
        console.log("[Person.js render]");
        //When the onChange is executed it goes away until the the App component to change the name of the person, then
        //it calls the update props hook lifecycle

        //Here is a way to return a single object at the root level, without interfering by using a high order component (hoc) as the Aux one
        // The same tha is done by the Aux component can be performed by the default React.Fragment one
        // return (
        //     // <StyledDiv>
        //     // <div className={classes.Person}>
        //     // <Aux>
        //     <React.Fragment>
        //         <p onClick={this.props.click}>
        //             Im {this.props.name} and Im {this.props.age} years old
        //         </p>
        //         <p>
        //             {this.props.children}
        //         </p>
        //         {/*//when this prop is called which is coming from the Person component, it is passed up into the App component*/}
        //         <input
        //             type="text"
        //             onChange={this.props.changed}
        //             value={this.props.name}
        //         />
        //     </React.Fragment>
        //     // </Aux>
        //     // </div>
        // );
        //here is another way of rendering the same stuff, but is like cumbersome since we have to make use of keys, so is not that convenient
        // return [
        //         <p key="k1" onClick={this.props.click}>
        //             Im {this.props.name} and Im {this.props.age} years old
        //         </p>,
        //         <p key="k2">
        //             {this.props.children}
        //         </p>,
        //         <input
        //             key="k3"
        //             type="text"
        //             onChange={this.props.changed}
        //             value={this.props.name}
        //         />
        // ];

        //This is the other way of rendering the same in this component, by using a JS function that internally renders a generated wrapper component
        return (
            // <StyledDiv>
            // <div className={classes.Person}>
            <Aux>
                {/*/!*We only use the auth context for the pieces of the components that depend on context to be rendered*!/*/}
                {/*<AuthContext.Consumer>*/}
                {/*    /!*{this.props.isAuth? <p>Authenticated!</p>:<p>Please log in!</p>}*!/*/}
                {/*    {(context) => context.authenticated? */}
                {/*        (<p>Authenticated!</p>):*/}
                {/*        (<p>Please log in!</p>)*/}
                {/*    }*/}
                {/*</AuthContext.Consumer>*/}

                {this.context.authenticated?
                    (<p>Authenticated!</p>):
                    (<p>Please log in!</p>)
                }
                <p onClick={this.props.click}>
                    Im {this.props.name} and Im {this.props.age} years old
                </p>
                <p>
                    {this.props.children}
                </p>
                {/*//when this prop is called which is coming from the Person component, it is passed up into the App component*/}
                <input
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>
            // </div>
        );
    }
};

//By doing this we ensure that the props are being generated with the right type, in case that somebody that edits our code, does not know how to add the properties
//From the outside component
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

//to generate it with the wrapper function we need to pass the export as the generated function and the arguments as the component and the classes
export default withClassWrapperFunction(Person, classes.Person);