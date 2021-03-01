import React, { useEffect, useState } from 'react';
import playerData from '../../data/data.json'
import PlayerInfo from '../PlayerInfo/PlayerInfo';
import Team from '../Team/Team';

const Players = () => {
    const [players, setPlayers] = useState(playerData);         // using useState 
    const [selectedPlayer, setSelectedPlayer] = useState([]);

    useEffect(() => {                                           // using useEffect
        setPlayers(playerData);
    }, [])

    const handleAddPlayer = (player) => {                       // here select to new player in the team
        const value = player;

        const newPlayer = [...selectedPlayer, player];
        let isInArray = selectedPlayer.includes(value, 0);
        if (isInArray != true) {                            // if isInArray not equal to true, that means that player is not 
            setSelectedPlayer(newPlayer);                   // selected yet. and then select that player into the team.
        }
        else {                                              // if isInArray equal to true, that means that player is already
            return;                                         // selected the team and thats why we should not select it again.
        }
    }
                                                            // using bootStrap class to display flex.
    return (
        <div className="container py-5">
            <div className="d-flex justify-content-between">
                <div className="d-flex flex-wrap">
                    {
                        players.map(player => <PlayerInfo
                            player={player}                     // pass value to PlayerInfo using attribute 
                            handleAddPlayer={handleAddPlayer}
                            key={player.id}                     // passing id to manipulate data efficiently.
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