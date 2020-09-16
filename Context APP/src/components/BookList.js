import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

// AN EASIER WAY TO USE CONTEXT IN FUNCTIONAL COMPONENTS 
// A lot cleaner compared to using <ThemeContext.Consumer> in functional components to obtain the context object.

const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext); // Destructuring
    const { books } = useContext(BookContext);
    const theme = isLightTheme ? light : dark;
    return (
        <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
                <ul>
                { books.map(book => {
                    return (
                        <li key={ book.id } style={{ background: theme.ui }}>{ book.title }</li>
                    );
                }) }
                    {/* <li style={{ background: theme.ui }}>the way of kings</li>
                    <li style={{ background: theme.ui }}>the name of the wind</li>
                    <li style={{ background: theme.ui }}>the final empire</li> */}
                </ul>
            </div>
    );
}

export default BookList;

// USING CONTEXT IN CLASS BASED COMPONENTS
// For class based components, we use static "contextType = ThemeContext;" to obtain the context object.


// class BookList extends Component {
//     static contextType = ThemeContext;
//     render() {
//         const { isLightTheme, light, dark } = this.context;
//         const theme = isLightTheme ? light : dark;
//         return (
//             <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
//                 <ul>
//                     <li style={{ background: theme.ui }}>the way of kings</li>
//                     <li style={{ background: theme.ui }}>the name of the wind</li>
//                     <li style={{ background: theme.ui }}>the final empire</li>
//                 </ul>
//             </div>
//         );
//     }
// }
