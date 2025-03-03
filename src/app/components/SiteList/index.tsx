"use client"; 
import { useEffect } from 'react';
//import { useBetween } from 'use-between';
import { useClientsSites } from '@core/stores';
import './index.scss';



export const SiteList: React.FC = () => {
    const { getSitesWithClients } = useClientsSites();
    const siteData = getSitesWithClients();

    useEffect(() => {

        console.log(siteData);

    }, [siteData]);

    return (
        <div className="sites-list">
            <div className="label">Client / Site List</div>
            <div className="content">
                <table>
                    <thead>
                        <tr>
                            <td className="client">Client Name <span className="ml-2"><i className="fa fa-caret-down" /></span></td>
                            <td className="site">Site Name <span className="ml-2"><i className="fa fa-caret-down" /></span></td>
                            <td className="location">Location <span className="ml-2"><i className="fa fa-caret-down" /></span></td>
                            <td className="on-duty">On Duty <span className="ml-2"><i className="fa fa-caret-down" /></span></td>
                            <td className="status">Status <span className="ml-2"><i className="fa fa-caret-down" /></span></td>
                        </tr>
                    </thead>
                    <tbody>
                        {siteData.map((item)=>{
                            return(
                                <tr key={item.id}>
                                    <td className="client">{item.client?.name}</td>
                                    <td className="site"><i className="fa fa-map-marker-alt mr-2" /> {item.name}</td>
                                    <td className="location">{item.location}</td>
                                    <td className="on-duty">{item.clockedIn || 'N/A'}</td>
                                    <td className="status">{item.active ? 'Active' : 'Inactive'}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};