import React from "react"
import "./UserPicture.css"

const UserPicture = ({user}) => {

    /** Image arrives as a binary array and need to be converted to string for
     display the image. However the binary includes metadatas like file name, size etc.
     In order to make compatible as image, need to convert to an object and take only
     the necessary data buffer which will be compatible format as image source.
     **/

    // Raw binary array converted into an object
    const imgObject = uintToString(user.image.image.data)

    // Converting the image buffer data into a binary string
    const bin = arrayBufferBase64(imgObject.buffer.data)

    // In order to display as an image need the data:image prefix
    // The image is ready to use as a corect image source
    const imgSrc = `data:image/jpeg;base64,${bin}`

    /** It converts binary array into base64 string **/
    function arrayBufferBase64(buffer) {
        let binary = ''
        let bytes = [].slice.call(new Uint8Array(buffer))

        bytes.forEach( b => binary += String.fromCharCode(b))

        return btoa(binary)
    }

    /** Converts the binary data into an object **/
    function uintToString(uintArray) {
        let encodedString = String.fromCharCode.apply(null, uintArray),
            decodedString = decodeURIComponent(escape(encodedString));
        return JSON.parse(decodedString)
    }



    return(
        <div className="img-container" >
            <img className="image" src={imgSrc} width="300" height="300"/>
        </div>
    )
}

export default UserPicture