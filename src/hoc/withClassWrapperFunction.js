import React from 'react'

//We can wrap components in react by using functions also, normal JS functions, here we receive the input of the component to wrap
// (that's why it needs to be in uppercase) and the class to be applied to wrap it
const withClassWrapperFunction = (WrappedComponent, className) =>{
    //here im returning a functional component that is gonna wrap what is coming into this function, this is why I return props in there
    return (props =>
        <div className={className}>
            {/*here by adding the spread operator to get the props we are being passed from the component call
            e.g. in the index.js we are passing appTitle to the App.js component and here we are reassigning the App.js to the WrappedComponent,
            since that operation occurs, we have to pick the props from the passed new component by doing the {...props}*/}
            <WrappedComponent {...props}/>
        </div>);
}

export default withClassWrapperFunction;