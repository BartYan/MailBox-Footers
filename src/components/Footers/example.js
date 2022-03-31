import React from "react";

function Columbus({username, email, surname, position, image}) {
    return (
        <>
            <div>
                Imie: {username}
                Email:{email}
                Nazwisko:{surname}
                stanowisko:{position}
                avatar:
                <img className="previewImg"
                    src={image}
                    alt="" />
            </div>
        </>
    )
}

export default Columbus;