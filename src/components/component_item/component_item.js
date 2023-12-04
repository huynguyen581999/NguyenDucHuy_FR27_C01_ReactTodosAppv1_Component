import React from "react";
import "../../style.css";

// class Component_item extends React.Component {
//     render() {
//         return (
//             <div class="todo-item-container">
//                 <span class="todo-item-toggle">
//                     <img src="assets/active-tick.svg" alt="tick" />
//                 </span>
//                 <div class="todo-item-content">
//                     Uống một tách trà nóng
//                 </div>
//                 <div class="todo-item-options">
//                     <span class="icon-btn">
//                         <img src="assets/edit.svg" alt="edit" />
//                     </span>
//                     <span class="icon-btn">
//                         <img src="assets/delete.svg" alt="close" />
//                     </span>
//                 </div>
//             </div>
//         );
//     }
// }

const Component_item = () => {
    return (
        <div class="todo-item-container">
            <span class="todo-item-toggle">
                <img src="assets/active-tick.svg" alt="tick" />
            </span>
            <div class="todo-item-content">
                Uống một tách trà nóng
            </div>
            <div class="todo-item-options">
                <span class="icon-btn">
                    <img src="assets/edit.svg" alt="edit" />
                </span>
                <span class="icon-btn">
                    <img src="assets/delete.svg" alt="close" />
                </span>
            </div>
        </div>
    );
}
export default Component_item;