import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './PlayerInfo.css'

const PlayerInfo = (props) => {
    // console.log('Test',props)
    // console.log(props.player.name)
    const { name, images, team, nationality, playerTypes, matchPlayed, birthday, age, height, weight, bid } = props.player;
    return (
        <div className="">
            <div className="player-container">
                <div className="card rounded">
                    <img src={images} className="card-img-top" alt="Name" />
                    <div className="card-body">
                        <h4 className="card-title">Name : {name}</h4>
                        <h5>Team Name : {team}</h5>
                        <h6>Nationality : {nationality}</h6>
                        <h6>Player Typed : {playerTypes}</h6>
                        <h6>Match played : {matchPlayed}</h6>
                        {/* <h6>Birthday : {birthday}</h6> */}
                        <h6>Age : {age}</h6>
                        {/* <h6>Height : {height}</h6> */}
                        {/* <h6>Weight : {weight}</h6> */}
                        <h4>Bid : {bid} (BDT)</h4>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <button onClick={() => props.handleAddPlayer(props.player)} className="btn btn-primary"><FontAwesomeIcon icon={faUserPlus} /> Add Player</button>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default PlayerInfo;