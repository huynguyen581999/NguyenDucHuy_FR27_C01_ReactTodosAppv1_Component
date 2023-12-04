import React from "react";
import "../../style.css";
import Component_input_placeholder from "../component_input_placeholder/component_input_placeholder";
import Component_filter from "../component_filter/component_filter";
import Component_list_container from "../component_list_container/component_list_container";


// class Component_content extends React.Component {
//     render() {
//         return (
//             <>
//                 <h3 class="header">
//                     <span class="header__title">My Todos</span>
//                 </h3>

//                 <div class="todo-container-wrapper">
//                     <div class="todo-container">
//                         <Component_input_placeholder />
//                         <Component_filter />
//                         <Component_list_container />
//                     </div>
//                 </div>
//             </>
//         );
//     }
// }

const Component_content = () => {
    return (
        <>
            <h3 class="header">
                <span class="header__title">My Todos</span>
            </h3>

            <div class="todo-container-wrapper">
                <div class="todo-container">
                    <Component_input_placeholder />
                    <Component_filter />
                    <Component_list_container />
                </div>
            </div>
        </>
    );
}

export default Component_content;