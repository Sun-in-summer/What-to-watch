import { useEffect } from 'react';
import { useVideoEvents } from '../../hooks/use-video-events';

type VideoPlayerProps = {
    src: string;
    poster: string;
    isPlaying: boolean;
    onEnd: () => void;
};

function VideoPlayer({ src, poster, isPlaying, onEnd }: VideoPlayerProps): JSX.Element {
    const { videoRef, isError, setIsError } = useVideoEvents(src);




    useEffect(() => {

        if (videoRef.current && !isError) {

            if (isPlaying) {
                videoRef.current.play().catch(() => {
                    setIsError(true);
                });
            } else {
                videoRef.current.pause();
            }
        }
    }, [isPlaying, isError, videoRef, setIsError]);

    return (
        <video
            ref={videoRef as React.RefObject<HTMLVideoElement>}
            src={src}
            poster={poster}
            muted
            onEnded={onEnd}
            width="280"
            height="175"
        />
    );
};

export default VideoPlayer;