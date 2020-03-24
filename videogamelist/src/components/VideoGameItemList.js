// This component handles individual video game entries
import React from 'react';

const VideoGameItemList = (props) => {
    return (  
        <table className="table table-bordered">
            {/* Displays column names */}
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Video Game</th>
                    <th>Cost</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { 
                    props.videogameItems.length > 0 ? (
                    // Displays each video game in list
                    props.videogameItems.map((videogameItem) => (
                        <tr key={videogameItem.id}>
                            <td>{ videogameItem.id }</td>
                            <td>{ videogameItem.videogame }</td>
                            <td>{ videogameItem.cost }</td>
                            <td>
                                {/* Displays edit, delete, and pending button and handles each action */}
                                <button className="btn btn-success ml-2" onClick={() => props.editVideoGameItem(videogameItem) }>Edit</button>
                                <button className="btn btn-danger ml-2" onClick={() => props.deleteVideoGameItem(videogameItem.id) }>Delete</button>
                                <button className="btn btn-info ml-2" onClick={() => props.boughtVideoGameItem(videogameItem) }>
                                    { videogameItem.status ? 'Bought' : 'Pending' }
                                </button>
                            </td>
                        </tr>
                        )
                    )
              ) : (
                <tr>
                    {/* Displays if no video game is in list */}
                    <td colSpan={3}>No money no video games</td>
                </tr>
              )
            }
            </tbody>
      </table>
    );
  }


export default VideoGameItemList;