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



    return (
        <div>
            {(!data) ? <h1>is loading...</h1> : data.response[0].league.standings[0].map(element =>
                <div>
                    <span>{element.team.name}</span>
                    <span>{element.rank}</span>
                    <span>{element.points}</span>
                    <span>{element.all.goals.for}</span>
                     <span>{element.all.goals.against}</span>
                </div>
            )}


        </div>
    )
}
