import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import './Team.css'

const Team = (props) => {
    const totalBudget = props.selectedPlayer.reduce((total, player) => total + player.bid, 0); // find totalBudget using reduce()

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h3>TEAM PROFILE <FontAwesomeIcon icon={faUsers} /></h3>
                    <h5 className="card-title">Team Member : {props.selectedPlayer.length}</h5>
                    <h5>Name of the Team Member :</h5>
                    <ul>
                        {
                            props.selectedPlayer.map(addPlayer => <li key={addPlayer.id}>{addPlayer.name}<ul><li>Bid : {addPlayer.bid} (BDT)</li></ul></li>)    // here we show player name and player bid.(auction money)
                        }
                    </ul>
                    <h5>Total Budget : {totalBudget} (BDT)</h5>
                </div>
            </div>
        </div>
    );
};

export default Team;