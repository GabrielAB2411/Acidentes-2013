import ReactPlayer from "react-player/youtube";

type YoutubePlayerProps = {
    url: string
}

export default function YoutubePlayer({url}: YoutubePlayerProps) {
    return (
        <ReactPlayer
            width={850}
            height={500}
            url={url}
            controls
        />
    )
}