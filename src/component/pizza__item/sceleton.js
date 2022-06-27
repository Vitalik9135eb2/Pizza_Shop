import React from "react"
import ContentLoader from "react-content-loader"

const Sceleton = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="135" cy="119" r="102" />
        <rect x="6" y="267" rx="11" ry="11" width="244" height="63" />
        <rect x="15" y="347" rx="11" ry="11" width="87" height="31" />
        <rect x="144" y="349" rx="11" ry="11" width="104" height="31" />
        <rect x="24" y="231" rx="11" ry="11" width="198" height="24" />
    </ContentLoader>
)

export default Sceleton