
import React, {useState} from "react"
import axios from "axios"


const Uploader = ({user}) => {

    const [image, setImage] = useState(null)

    console.log(image)

    function imageUploader(e) {
        setImage(e.target.files[0])
    }

    function onSubmit() {


        if(image != null){

            const data = new FormData()

            data.append('email', user.email)
            data.append('file', image)


            axios.post("/user/fileupload", data, {

            }).then(resp => console.log(resp.statusText))

        } else {
            console.log("No file")
        }

    }

    return(
        <div>
            <input type="file" name="picture" onChange={imageUploader} />
            <button type="button" onClick={onSubmit} >Upload</button>
        </div>
    )
}

export default Uploader
