//here this component is used as a wrapper to return a single root JSX object in other components
//the props.children means that it will return everything that is inside this component
const aux = props => props.children;

export default aux;