import {Dispatch, RefObject, SetStateAction, useEffect, useRef, useState} from 'react';


type UseVideoEventsReturn = {
    videoRef: RefObject<HTMLVideoElement | null>;
    isError: boolean;
    setIsError: Dispatch<SetStateAction<boolean>>;
};

export const  useVideoEvents  = (src:string): UseVideoEventsReturn  => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isError, setIsError] = useState(false);


useEffect(()=>{


        if (videoRef.current) {
            const video = videoRef.current;

            const handleError = () => {
                setIsError(true);
            };

            const handleLoadedData = () => {
                setIsError(false); // Сброс ошибки, если данные успешно загружены
            };

            video.addEventListener('error', handleError);
            video.addEventListener('loadeddata', handleLoadedData);

            return () => {
                video.removeEventListener('error', handleError);
                video.removeEventListener('loadeddata', handleLoadedData);
            }
        }
    }, [src]); 
     return {videoRef, isError, setIsError};
}