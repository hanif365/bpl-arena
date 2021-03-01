import React from 'react';
import './Team.css'

const Team = (props) => {
    console.log('Selected player', props.selectedPlayer);

    const totalBudget = props.selectedPlayer.reduce((total,player)  => total + player.bid, 0);

    return (
        <div>
            <div className="card" style={{ width: '22rem' }}>
                <div className="card-body">
                    <h5 className="card-title">Team Member : {props.selectedPlayer.length}</h5>
                    <h5>Name of the Team Member :</h5>
                    <ul>
                        {
                            props.selectedPlayer.map(addPlayer => <li key={addPlayer.id}>{addPlayer.name}<ul><li>Bid : {addPlayer.bid} (BDT)</li></ul></li>)
                        }
                    </ul>
                    <h5>Total Budget : {totalBudget} (BDT)</h5>
                </div>
            </div>
        </div>
    );
};

export default Team;