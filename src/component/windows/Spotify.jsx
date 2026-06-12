import React from "react";
import MacWindow from "./MacWindow";
import "./Spotify.scss";

export const Spotify = ({windowName,setWindowsState}) => {
    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState} width="25vw" >
            <div className="spotify-window">
                <iframe
                    data-testid="embed-iframe"
                    style={{borderRadius:"12px"}}
                src="https://open.spotify.com/embed/artist/2oBG74gAocPMFv6Ij9ykdo?utm_source=generator&si=cb3fc3d5d3384d23"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
        ></iframe>
        </div>
    </MacWindow >
  );
};
