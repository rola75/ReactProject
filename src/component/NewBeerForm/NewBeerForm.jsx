

const NewBeerForm = () => {

    const handleDataName = () 

    return(
     
        <div className="form">
            <label>Name</label>
            <input onInput={handleDataName} type="text" />
            <label>Tagline</label>
            <input onInput={handleDataTagline} type="text" />
            <button>Submit New Beer</button>
        </div>
        
    )
}

export default NewBeerForm;