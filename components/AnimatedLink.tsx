import {ArrowRight, ArrowRightSmall, HistoryLink } from "./MainPage/HistorySection/HistorySectionStyles";
import {FC, useState} from "react";


type AnimatedLinkType = {
    route: string
    text: string
    icons: JSX.Element[]
}
const AnimatedLink:FC<AnimatedLinkType> = ({route, text, icons}) => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HistoryLink href={route}
                     onMouseEnter={onHover}
                     onMouseLeave={onHover}>
            <span>{text}</span>{hover ? icons[0] : icons[1]}
        </HistoryLink>
    );
};

export default AnimatedLink;