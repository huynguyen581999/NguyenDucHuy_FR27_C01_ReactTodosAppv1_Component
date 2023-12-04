import React from "react";
import "../../style.css";
import Component_status from "../component_status/component_status";

// class Component_filter extends React.Component {
//     render() {
//         return (
//             <div class="todo-filter-container">
//                 <div class="todo-filter-count">3 items left</div>
//                 <div class="todo-filter-status">
//                     <Component_status />
//                     <Component_status />
//                     <Component_status />
//                 </div>
//             </div>
//         );
//     }
// }

const Component_filter = () => {
    return (
        <div class="todo-filter-container">
            <div class="todo-filter-count">3 items left</div>
            <div class="todo-filter-status">
                <Component_status />
                <Component_status />
                <Component_status />
            </div>
        </div>
    );
}
export default Component_filter;