import React, {useEffect, useRef, useContext} from "react";
import classes from "./Cockpit.css";
import AuthContext from '../../context/auth-context'

const cockpit = (props) =>{

    //since in functional components the createRef is not supported we use this syntax
    const toggleBtnRef = useRef(null);
    //this hook does all the things the other hooks in the class-based components do: update, runs when the component is initializing, when rendering, even
    //we can send http requests in this kind of hook, this work for the functional components
    //here as this useEffect does not have second argument as dependencies it will execute whenever is updating and when the component is mounted
    // useEffect(() => console.log('[Cockpit.js useEffect]'))

    //WE CAN USE AS MANY useEffects AS WE WANT
    //since the useEffect combines both the behaviour of ComponentDidMount and ComponentDidUpdate, we we add the dependencies as an array in
    //the second argument we are saying that it only has to be executed when the persons array gets updated or that property gets updated, and in the initial execution
    // useEffect(() => {
    //     console.log('[Cockpit.js useEffect]')
    //     setTimeout(() =>{
    //         alert('Saved date to the cloud');
    //     }, 1000)
    // }, [props.persons])

    const authContext = useContext(AuthContext);
    console.log(authContext.authenticated);

    //Here on the other hand, since the dependencies are an empty array, we say that it must not execute when updating but only when the component is mounted and unmounted
    //it means that it will only execute in the initial execution and if the component is removed, then it will execute when it's unmounted
    useEffect(() => {
        console.log('[Cockpit.js useEffect]')
        //since this alert will be executed everytime the component gets mounted and unmounted, and we only want it to be executed when mounted
        //then we can take advantage of the return cleanup of this useEffect to clear the timeout action before it gets executed, hence avoiding that alert again
        const timer = setTimeout(() =>{
            alert('Saved date to the cloud');
        }, 1000);
        //here we are calling the click reference on the reference that has been already built
        toggleBtnRef.current.click();
        //the cleanup "hook" is also present in useEffect, we can execute it by making the useEffect to return as the following
        //there we can execute tasks before this functional component gets destroyed
        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js cleanup in useEffect]')
        }
    },[]);

    //Here since there is no second argument this useEffect will run whenever any stage in the hook lifecycle gets executed
    //therefore will make some cleanup whenever any component gets updated
    useEffect(() => {
        console.log('[Cockpit.js 2nd useEffect]')
        return () => {
            console.log('[Cockpit.js cleanup in 2nd useEffect]')
        }
    });

    let btnClass = '';
    // let classes = ['red', 'bold'].join(' ');
    let assignedClasses = [];

    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red)
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold)
    }

    return (
        <div className={classes.Cockpit}>
            <h2 className={assignedClasses.join(' ')}>{props.title}</h2>
            {/*The button class(btnClass) when it's empty, is automatically assigned because there is a button class in Cockpit, then it gets assigned automatically*/}
            {/*when this button is actioned the state is modified because it shows the persons and changes the state in showPersons,
            then it calls the state update lifecycle hook*/}
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>Show Persons</button>
            {/*This button actually calls to the method reference passed from the App.js*/}
            {/*<AuthContext.Consumer>*/}
            {/*    /!*<button onClick={props.login}>Log In</button>*!/*/}
            {/*    /!*{(context)=> <button onClick={props.login}>Log In</button>}*!/*/}
            {/*    /!*Since we are now using a context, we get the login property from the context (parent component) instead of the current component props,*/}
            {/*     it works the same as before*!/*/}
            {/*    {(context)=> <button onClick={context.login}>Log In</button>}*/}
            {/*</AuthContext.Consumer>*/}
            <button onClick={authContext.login}>Log In</button>
        </div>
    )
}

export default cockpit;