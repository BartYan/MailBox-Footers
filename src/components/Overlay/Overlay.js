import React from "react";

function Overlay({overlayToggle, overlayActive, children, setAvatarBoxActive, setPhotosBoxActive}) {
    return (
    <div className={overlayActive ? "hide" : "overlay"}>
        {children}
    </div>
    )
}

export default Overlay;