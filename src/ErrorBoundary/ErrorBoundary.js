import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage:''
    }
    //this is a built in method that is in charge of catching the exceptions produced in the components that are wrapped by this
    //ErrorBoundary
    componentDidCatch(error, errorInfo) {
        //When catching this exception we are also changing the state of this component so that it displays something different
        this.setState({hasError: true, errorMessage: error})
    }

    render() {
        if(this.state.hasError){
            //this error boundary will only work in real servers not in development environments, however is wise to use it when needed only
            return <h1>{this.state.errorMessage}</h1>
        } else {
            //this props children is whatever we wrap inside this ErrorBoundary component, in this case the Person component
            //which is the one that is throwing the random error now
            return this.props.children;
        }
    }
}

export default ErrorBoundary;