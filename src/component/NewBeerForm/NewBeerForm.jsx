import { useState } from "react";

const NewBeerForm = () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [tagLine, setTagLine] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          
          let res = await fetch("http://localhost:3007/beers", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: name,
              image_url: image,
              tagline: tagLine
            }),
          });
          let resJson = await res.json();
          console.log("response", resJson)
          if (res.status === 200) {
            setName("");
            setImage("")
            setTagLine("");
            setMessage("User created successfully");
          } else {
            setMessage("Some error occured");
          }
         } 
        catch (err) {
          console.log(err);
        }
    };


        return(
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    />
                    <input
                    type="text"
                    value={image}
                    placeholder="Image URL"
                    onChange={(e) => setImage(e.target.value)}
                    />
                    <input
                    type="text"
                    value={tagLine}
                    placeholder="TagLine"
                    onChange={(e) => setTagLine(e.target.value)}
                    />
                
                    <button type="submit">Create Beer</button>

                    <div className="message">{message ? <p>{message}</p> : null}</div>
                </form>
            </div>
        );
}

export default NewBeerForm;