import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./img/logo.png";
import UserIcon from "./img/profile-user.png";

//React ELement
// const headingOne = React.createElement(
//     "h1",
//     {
//         key: "h1"
//     },
//     "Heading 1"
// );
// const headingTwo = React.createElement(
//     "h2",
//     {
//         key: "h2"
//     },
//     "Heading 2"
// );
// const headingThree = React.createElement(
//     "h3",
//     {
//         key: "h3"
//     },
//     "Heading 3"
// );

// const container = React.createElement(
//     "div",
//     {
//         className: "title",  
//         key: "div" 
//     },
//     [headingOne, headingTwo, headingThree]
// );


//Create the same element using JSX
// const container = (
//     <div className="title">
//         <h1>Heading 1 Container</h1>
//         <h2>Heading 2 Container</h2>
//         <h3>Heading 3 Container</h3>
//     </div>
// );

//Create a functional components of the same with JSX
// const ContainerMain = () => {
//     return (
//         <div className="title">
//             {container}
//             <h1>Heading 1 Function</h1>
//             <h2>Heading 2 Function</h2>
//             <h3>Heading 3 Function</h3>
//         </div>
//     )
// }


// Creating Header and Search and User Icon
const HeaderMain = () => {
    return (
        <div className="header">
            <img src={Logo} alt="logo" />
            <input type="text" className="searchInput" placeholder="Search Here..." />
            <img src={UserIcon} alt="User" className="userIcon"/>
        </div>
    )
}




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderMain />);