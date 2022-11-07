import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import appService from '../../App/Appservices/AppService'
import "./GoalDetails.scss"

export const GoalDetails = () => {

    const [apiData, setApiData] = useState("");

    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await appService.GetDetails("goals", id);

                console.log(result.data.item);
                setApiData(result.data.item);


            } catch (error) {
                console.error(error)
            }
        };
        getData();
    }, [id])

    return (
        <div className="invert" style={{ backgroundColor: `#${apiData.color}`, filter: "invert(100%)" }}>
            <div style={{ color: `#${apiData.color}`,filter: "invert(100%)" }} className="goalItem">
                <div className="headWrap">
                    <img src={`data:image/svg+xml; utf8,${apiData.icon}`} alt={apiData.title} className="icon" />
                    <h2 >{apiData.title}</h2>
                </div>
                <img src={apiData.image} alt={apiData.byline} />
                <h3>{apiData.byline}</h3>
                <p style={{ color: `#${apiData.color}`}}>{apiData.description}</p>
            </div>
        </div>
    )
}
