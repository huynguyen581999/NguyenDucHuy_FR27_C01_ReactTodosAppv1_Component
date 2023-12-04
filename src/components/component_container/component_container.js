import React from "react";
import "../../style.css"
import Component_content from "../component_content/component_content.js"
import Component_footer from "../component_footer/component_footer.js";

// class Component_container extends React.Component {

//     render() {
//         return (
//             <div id="todo-app">
//                 <Component_content />
//                 <Component_footer />
//             </div>
//         );
//     }
// }

const Component_container = () => {
    return (
        <div id="todo-app">
            <Component_content />
            <Component_footer />
        </div>
    );
}
export default Component_container;