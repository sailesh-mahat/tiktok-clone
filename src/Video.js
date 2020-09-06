import React from 'react';
import "./Video.css";

function Video() {
    return (
        <div className="video">
            <video 
                className="video__player" 
                loop
                src="https://youtu.be/NLOp_6uPccQ">

            </video>
            
            {/* VideoFooter */}
            {/* VideoSidebar */}
            
        </div>
    );
}

export default Video
