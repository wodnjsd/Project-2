import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

function ModalVideos() {
  const [isSadOpen, setSadOpen] = useState(false);
  const [isSad2Open, setSad2Open] = useState(false);
  const [isHappyOpen, setHappyOpen] = useState(false);
  const [isRelaxOpen, setRelaxOpen] = useState(false);
  const [isRockOpen, setRockOpen] = useState(false);

  return (

    
    <div className="columns is-multiline is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
      <React.Fragment>        
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isSadOpen}
          videoId="kgMVF1iSDzM"
          onClose={() => setSadOpen(false)}
        />

        <div className="buttons are-large column"> 
          <button className="button is-link" onClick={() => setSadOpen(true)}>
        Click here to listen to sad songs 😭
          </button>
        </div>
      </React.Fragment>
      
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isSad2Open}
          videoId="XYKO45HjuiY"
          onClose={() => setSad2Open(false)}
        />

        <div className="buttons are-large column"> 
          <button className="button is-link" onClick={() => setSad2Open(true)}>
        Click here to sing along to sad songs 😭
          </button>
        </div>
      </React.Fragment>
  
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isHappyOpen}
          videoId="CHrR-0aOo24"
          onClose={() => setHappyOpen(false)}
        />

        <div className="buttons are-large column"> 
          <button className="button is-warning" onClick={() => setHappyOpen(true)}>
        Click here for a good sing-along 🎤
          </button>
        </div>
      </React.Fragment>

      <React.Fragment>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isRelaxOpen}
          videoId="XYKO45HjuiY"
          onClose={() => setRelaxOpen(false)}
        />

        <div className="buttons are-large column"> 
          <button className="button is-primary" onClick={() => setRelaxOpen(true)}>
        Click here to chill 🛀
          </button>
        </div>
      </React.Fragment>

      <React.Fragment>  
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isRockOpen}
          videoId="rntPNneXEIM"
          onClose={() => setRockOpen(false)}
        />

        <div className="buttons are-large column"> 
          <button className="button is-danger" onClick={() => setRockOpen(true)}>
          Lets rock out! 🤘 🎸 🤘
          </button>
        </div>
      </React.Fragment>
    
    </div>
    
  )
}
export default ModalVideos

