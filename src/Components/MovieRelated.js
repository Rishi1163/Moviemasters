import useMovie from "../hooks/useMovie";
import SlidingWindow from "./SlidingWindow";

const MovieRelated = () => {
    const {
        related,
    } = useMovie()

    return (
        <>
            <SlidingWindow value={related} title="You may also like" type={1} className="mt-10" key={"you-may-also-like"}/>
        </>
    )
}

export default MovieRelated