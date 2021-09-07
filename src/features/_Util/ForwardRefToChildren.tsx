import { cloneElement, forwardRef } from "react";

const ForwardRefToChildren = forwardRef((props, ref) => (
    <div>
        {
            //cloneElement(props.children, {ref: ref}) //nah...
        }
    </div>
))