import React, { useState } from 'react';
import playerData from '../../data/data.json'
import PlayerInfo from '../PlayerInfo/PlayerInfo';
import Team from '../Team/Team';

const Players = () => {
    // console.log(playerData);
    const [players, setPlayers] = useState(playerData);
    const [selectedPlayer, setSelectedPlayer] = useState([]);

    const handleAddPlayer = (player) => {
        const newPlayer = [...selectedPlayer, player];
        setSelectedPlayer(newPlayer);
        console.log('Added', newPlayer)
    }

    return (
        <div className="container py-5">
            <div className="d-flex justify-content-between">
                <div className="d-flex flex-wrap">
                    {
                        players.map(player => <PlayerInfo
                            player={player}
                            handleAddPlayer={handleAddPlayer}
                            key={player.id}
                        ></PlayerInfo>)
                    }
                </div>

                <div className="team-container">
                    <Team selectedPlayer={selectedPlayer}></Team>

                </div>
            </div>
        </div>

    );
};

export default Players;