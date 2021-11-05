import { EndsWithSubstring } from "@/types/general-objects";

type PropType = {
    width: number | EndsWithSubstring<"%"> | EndsWithSubstring<"vw"> | EndsWithSubstring<"px">,
    height: number | EndsWithSubstring<"%"> | EndsWithSubstring<"vh"> | EndsWithSubstring<"px">,
    children: React.ReactNode
}

const InlineContainer = ({width = "100%", height = "100%", children}: PropType) => {
    return (
        <div style={{width: width, height: height}}>
            {
                children
            }
        </div>
    )
}

export default InlineContainer