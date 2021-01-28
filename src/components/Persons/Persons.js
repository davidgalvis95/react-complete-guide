// import React from "react";
// import Person from './Person/Person'
//
// const persons = (props) => {
//     console.log("[Persons.js render]")
//     props.persons.map((person, index) => {
//
//         return <Person
//             click={() => props.clicked(index)}
//             key={person.id}
//             name={person.name}
//             age={person.age}
//             changed={(event) => props.changed(event, person.id)}
//         />
//     })
// }
//
// export default persons;

// ================================================================================
// SECTION 7th DIVING DEEPER INTO COMPONENTS -- CONVERTING PERSONS INTO A CLASS BASED COMPONENT
// ================================================================================

import React, {Component, PureComponent} from "react";
import Person from './Person/Person'
import AuthContext from '../../context/auth-context'

class Persons extends Component {
// If our aim is to check that none of the properties in the component have changed or that all of them have changed to allow the update
//then instead of shouldComponentUpdate, we should extend from PureComponent
// class Persons extends PureComponent {

    //if we have some scenario when props of the component can change or an internal state can do it,
    //this is the hook to use sync the state (don't send HTTP requests here)
    //this needs to be static in order to work
    static getDerivedStateFromProps(props, state){
        console.log("[Persons.js getDerivedStateFromProps]", props)
        return state;
    }

    //while this component is very beneficial for performance, it's not recommended to do in every component, only on those ones when we are sure
    //that the changes in the parent component have not to affect what's happening in the child one
    shouldComponentUpdate(nextProps, nextState) {
        console.log("[Persons.js shouldComponentUpdate]")
        //This returns whether the component should be updated or not, but based in a previous logic
        //The logic for example should check whether the prev props are different from the next ones and update if it's the case
        //here we are ensuring that we update the component if any of the props of the persons array is changed
        if (nextProps.persons !== this.props.persons){
            return true;
        } else {
            return false;
        }
    }

    //Takes a snapshot of the component before updating, is used not so frequently, but when used is used in last-minute DOM operations
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[Persons.js getSnapshotBeforeUpdate]")
        //here we are capturing the snapshot cause its required OTHERWISE WILL
        return { message: 'SNAPSHOT!'}
    }

    //verifies and gets a response of whether the component was updated, here we can cause side effects, do not update the state synchronously here
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[Persons.js componentDidUpdate]");
        console.log(snapshot)
    }

    //This component is added to execute tasks before the component gets unmounted (here since the persons component is toggled, we use the unmount hook)
    componentWillUnmount() {
        console.log("[Persons.js componentWillUnmount]")
    }

    render() {
        console.log("[Persons.js render]")

        return this.props.persons.map((person, index) => {

            //when the changed prop is called which is coming from the Person component, it is passed up into the App component to execute a
            // method that will change the name property, then calling the update hook lifecycle
            return <Person
                click={() => this.props.clicked(index)}
                key={person.id}
                name={person.name}
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)}
                //{/*this prop is forwarded so far to the Person component*/}
                //{/*Since we won'' use the context here but in the Person object, and the context is used to get the data passed from component A to C without
                //redirecting it through B, then we can comment that data redirection*/}
                // isAuth={this.props.isAuthenticated}
            />
        })
        // return (
        //     //Here we use a Consumer since the child components which use the context, do it through consumers
        //     <AuthContext.Consumer>
        //         {/*We get the context variable from the consumer and since the objects that wraps the context is a JSX function, we need to wrap it up
        //         in brackets to generate a dynamic object, and to pass the context received from the consumer into that function and use it in the dynamic object to generate we use a
        //         arrow function to do this*/}
        //         {(context) => { return this.props.persons.map((person, index) => {
        //
        //             //when the changed prop is called which is coming from the Person component, it is passed up into the App component to execute a
        //             // method that will change the name property, then calling the update hook lifecycle
        //             return <Person
        //                 click={() => this.props.clicked(index)}
        //                 key={person.id}
        //                 name={person.name}
        //                 age={person.age}
        //                 changed={(event) => this.props.changed(event, person.id)}
        //                 {/*this prop is forwarded so far to the Person component*/}
        //                 isAuth={this.props.isAuthenticated}
        //             />
        //         })}}
        //     </AuthContext.Consumer>
        // );
    }
}

export default Persons;