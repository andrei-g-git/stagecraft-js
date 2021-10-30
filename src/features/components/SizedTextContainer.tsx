import React from 'react'

const SizedTextContainer = (props: any) => {
    return (
        <div className={`sized-text-container ${props.styles.join(" ")}`} >
            {
                props.children
            }
        </div>
    )
}

export default SizedTextContainer;