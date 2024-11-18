import React from 'react'
import { useState, useEffect } from "react";
import { fetchData } from '../../APIcall/API';


export default function Table() {
    // const [teamName, setTeamName] = useState('')
    // const [rank, setRank] = useState(0)
    // const [points, setPoints] = useState(0)

    const [data, setData] = useState(null)

    useEffect(() => {
        fetchData(setData)

    }, [])



    return(
        <div className='table-container'>
            <h2>2022 Premier League LeaderBoard</h2>
            {(!data) ? <h4>is loading</h4> : (
                <table>
                   <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Team Name</th>
                        <th>Points</th>
                        <th>Goals For</th>
                        <th>Goals Against</th>
                    </tr>
                    </thead>
                <tbody>
                    {data.response[0].league.standings[0].map((element =>
                    <tr key={element.team.name}>
                        <td>{element.rank}</td>
                        <td>{element.team.name}</td>
                        <td>{element.points}</td>
                        <td>{element.all.goals.for}</td>
                        <td>{element.all.goals.against}</td>
                    </tr>
                    ))}
                </tbody> 
                </table>
            )  }
        </div>
    )
    
    // return (
    //     <div>
    //         {(!data) ? <h1>is loading...</h1> : data.response[0].league.standings[0].map(element =>
    //             <div>
    //                 <span>{element.team.name}</span>
    //                 <span>{element.rank}</span>
    //                 <span>{element.points}</span>
    //                 <span>{element.all.goals.for}</span>
    //                  <span>{element.all.goals.against}</span>
    //             </div>
    //         )}


    //     </div>
    // )
}
