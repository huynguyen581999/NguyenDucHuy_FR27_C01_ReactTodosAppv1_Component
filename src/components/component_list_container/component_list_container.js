import React from "react";
import "../../style.css";
import Component_item from "../component_item/component_item";

// class Component_list_container extends React.Component {
//     render() {
//         return (
//             <div class="todo-list-container">
//                 <Component_item />
//                 <Component_item />
//                 <Component_item />
//                 <Component_item />
//                 <Component_item />
//                 <Component_item />
//             </div>
//         );
//     };
// }

const Component_list_container = () => {
    return (
        <div class="todo-list-container">
            <Component_item />
            <Component_item />
            <Component_item />
            <Component_item />
            <Component_item />
            <Component_item />
        </div>
    );
}
export default Component_list_container;