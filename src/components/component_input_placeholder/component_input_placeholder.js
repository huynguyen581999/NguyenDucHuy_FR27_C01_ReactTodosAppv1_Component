import React from "react";
import "../../style.css"

// class Component_input_placeholder extends React.Component {
//     render() {
//         return (
//             <div class="todo-form-container">
//                 <form>
//                     <input type="text" placeholder="What need to be done?" />
//                 </form>
//             </div>
//         );
//     }
// }

const Component_input_placeholder = () => {
    return (
        <div class="todo-form-container">
            <form>
                <input type="text" placeholder="What need to be done?" />
            </form>
        </div>
    );
}
export default Component_input_placeholder;