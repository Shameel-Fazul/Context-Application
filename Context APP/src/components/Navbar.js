import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import AuthContextProvider from '../contexts/AuthContext';
import { AuthContext } from '../contexts/AuthContext'

class Navbar extends Component {


// METHOD 2 - CAN BE USED IN FUNCTIONAL COMPONENTS & USE MULTIPLE CONTEXTS IN ONE COMPONENT.
    render() {
        return (
            <AuthContext>{(authContext) => (
                <ThemeContext.Consumer>{(themeContext) => {
                  const { isAuthenticated, toggleAuth } = authContext; // Destructuring
                  const { isLightTheme, light, dark } = themeContext; // Destructuring
                  const theme = isLightTheme ? light : dark; //Ternary operator
                  return (
                    <nav style={{ background: theme.ui, color: theme.syntax }}>
                      <h1>Context App</h1>
                      <div onClick={toggleAuth}>
                        { isAuthenticated ? 'Logged in' : 'Logged out' }
                      </div>
                      <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                      </ul>
                    </nav>
                  )
                }}</ThemeContext.Consumer>
              )}</AuthContext>
        );
    }
}

export default Navbar;

// METHOD 1 - EASY, BUT ONLY RESERVED TO CLASS BASED COMPONENTS & CAN ONLY USE ONE CONTEXT AT A TIME.
//static contextType = ThemeContext;
// ^ In this case, it's going to find a provider in the component tree for this context.
// ^ Since App.js is the root component and has a <ThemeContextProvider>
// ^ It's going to use that provider to access the data of it, like the state.
// ^ All the data(state data) of that context are attached to a context property in this component.
// ^ It can be accesed using 'this.context'
// render() {
//     console.log(this.context);
//     const { isLightTheme, light, dark } = this.context; // Destructuring
//     const theme = isLightTheme ? light : dark; // Ternary Operator
//     return (
//         <nav style={{ background: theme.ui, color: theme.syntax }}> 
//             <h1>Context App</h1>
//             <ul>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Contact</li>
//             </ul>
//         </nav>




