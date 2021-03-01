import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './PlayerInfo.css'

const PlayerInfo = (props) => {     // use destructuring below.
    const { name, images, team, nationality, playerTypes, matchPlayed, birthday, age, height, weight, bid } = props.player;
    return (
        <div className="">
            <div className="player-container">
                <div className="card card-container rounded">
                    <img src={images} className="card-img-top" alt="player-image" />
                    <div className="card-body">
                        <h4 className="card-title">Name : {name}</h4>
                        <h5>Team Name : {team}</h5>
                        <h6>Nationality : {nationality}</h6>
                        <h6>Player Typed : {playerTypes}</h6>
                        <h6>Match played : {matchPlayed}</h6>
                        <h6>Age : {age}</h6>
                        <h4>Bid : {bid} (BDT)</h4>
                        <button onClick={() => props.handleAddPlayer(props.player)} className="btn btn-primary"><FontAwesomeIcon icon={faUserPlus} /> Add Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerInfo;