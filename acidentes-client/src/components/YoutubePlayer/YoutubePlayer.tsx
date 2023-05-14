import ReactPlayer from "react-player/youtube";

type YoutubePlayerProps = {
    url: string
}

export default function YoutubePlayer({ url }: YoutubePlayerProps) {
    return (
        <ReactPlayer
            width="100%"
            height="500px"
            url={url}
            controls
            style={{overflow: "hidden", borderRadius: "20px"}}
        />
    )
}