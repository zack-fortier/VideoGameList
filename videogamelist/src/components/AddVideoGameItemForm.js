import React from 'react';

const AddVideoGameItemForm = props => {
    return (
        <form onSubmit={ props.addVideoGameItem }>
          <div>
            <div class = "row">
                <div class = "form-group col-lg-6">
                    <label>Video game name </label>
                    <input type="text" className = "form-control input-sm" name="videogame" value={props.videogame} onChange={ props.handleInputChange}/>
                </div>
            </div>
            <div class = "row">
                <div class = "form-group col-lg-6">
                    <label>Video game cost </label>
                    <input type="number" className = "form-control input-sm" name="cost" value={props.cost} onChange={ props.handleInputChange} />
                </div>
            </div>
            <button class = "btn btn-primary"> Add video game item </button>
          </div>
        </form>
    )
}

export default AddVideoGameItemForm;