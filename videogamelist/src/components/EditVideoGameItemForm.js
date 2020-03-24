import React from 'react';

const EditVideoGameItemForm = props => {
    return (
        <form>
          <div>
            <div class="row">
                <div class= "form-group col-lg-6">
                    <label>Video game name </label>
                    <input type="text" class="form-control" name="videogame" value={props.videogame} onChange={ props.handleInputChange}/>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-lg-6">
                    <label>Video game cost </label>
                    <input type="number" class="form-control" name="cost" value={props.cost} onChange={ props.handleInputChange} />
                </div>
            </div>
            <button class="btn btn-primary" onClick={ props.updateVideoGameItem }> Update </button>
            <button class="btn btn-danger" onClick={() => props.setEditing(false)}> Cancel </button>
          </div>
        </form>
      )
}

export default EditVideoGameItemForm;