import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
    constructor (props) {
        super();
        this.name = props.name;
    }
    
    render () {
        //return React.createElement( 'div', null, 'Hello ', this.name );
        return <div>Hello, {this.name}!</div>
    }
}

ReactDOM.render(
    React.createElement(HelloWorld, {name: "Ivanchis"}), 
    document.querySelector('#view')
);

// https://www.twilio.com/blog/2015/08/setting-up-react-for-es6-with-webpack-and-babel-2.html
// export default HelloWorld;
