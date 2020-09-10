import React, { createContext, Component } from 'react'; // Importing the Context function from the react library

export const ThemeContext = createContext(); // creating a reference of the createContext() function.


class ThemeContextProvider extends Component {
    state = { // "syntax" is the property name of the text color.
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
    }
    toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme }) // Logical statement - NOT GATE - Does the opposite.
    }
    render() {
        return ( // The Provider is going to give data of the state to any component it wraps.
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                { this.props.children } 
            </ThemeContext.Provider>
        // In this case, we're using the spread operator to take in all the properties in our state.
        // When we wrap components inside the <ThemeContextProvider> tags, the components inside are attached to 
        // the props of <ThemeContextProvider>.
        // ^ Using this, we use { this.props.children } to display the components that are wrapped inside the tags 
        // or else the components wrapped in won't display anything.
        // { this.props.children } refers to the children that <ThemeContextProvider> wraps.
        );
    }
}

export default ThemeContextProvider;
