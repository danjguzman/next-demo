"use client"; 
import { useState } from 'react';
import { useCustomerData } from '@core/stores';
import './index.scss';

export const SiteList: React.FC = () => {
    const { sitesWithClients } = useCustomerData();
    const [getSort, setSort] = useState({ key: 'clientName', dir: 'asc' });

    /* Sort Table Cells (simple) */
    function sort(key: string) {
        setSort((prevSort) => {
            if (prevSort.key === key) {
                return { key, dir: prevSort.dir === 'asc' ? 'desc' : 'asc' };
            } else {
                return { key, dir: getSort.dir === 'desc' ? 'desc' : 'asc' };
            };
        });
    };

    return (
        <div className="sites-list">
            <div className="content">
                <table>
                    <thead>
                        <tr>

                            {/* These can be rendered from an array of Table Column Data, but for now, just a demo... */}
                            <td className="client" data-sort="clientName" onClick={()=>sort('clientName')}>
                                Client Name 
                                <span className="ml-2">
                                    <i className={`fa fa-caret-${getSort.key === 'clientName' ? (getSort.dir === 'asc' ? 'up' : 'down') : 'down'}`} />
                                </span>
                            </td>
                            <td className="site" data-sort="name" onClick={()=>sort('name')}>
                                Site 
                                <span className="ml-2">
                                    <i className={`fa fa-caret-${getSort.key === 'name' ? (getSort.dir === 'asc' ? 'up' : 'down') : 'down'}`} />
                                </span>
                            </td>
                            <td className="location" data-sort="location" onClick={()=>sort('location')}>
                                Country 
                                <span className="ml-2">
                                    <i className={`fa fa-caret-${getSort.key === 'location' ? (getSort.dir === 'asc' ? 'up' : 'down') : 'down'}`} />
                                </span>
                            </td>
                            <td className="on-duty" data-sort="clockedIn" onClick={()=>sort('clockedIn')}>
                                On Duty 
                                <span className="ml-2">
                                    <i className={`fa fa-caret-${getSort.key === 'clockedIn' ? (getSort.dir === 'asc' ? 'up' : 'down') : 'down'}`} />
                                </span>
                            </td>
                            <td className="status" data-sort="active" onClick={()=>sort('active')}>
                                Status 
                                <span className="ml-2">
                                    <i className={`fa fa-caret-${getSort.key === 'active' ? (getSort.dir === 'asc' ? 'up' : 'down') : 'down'}`} />
                                </span>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {sitesWithClients
                            .sort((a: any, b: any) => {
                                const { key, dir } = getSort;
                                if (a[key] < b[key]) return dir === 'asc' ? -1 : 1;
                                if (a[key] > b[key]) return dir === 'asc' ? 1 : -1;
                                return 0;
                            })
                            .map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td className="client">{item.clientName}</td>
                                        <td className="site"><i className="marker fa fa-map-marker-alt mr-2" /> {item.name}</td>
                                        <td className="location">{item.location}</td>
                                        <td className="on-duty">{item.clockedIn || 'N/A'}</td>
                                        <td className="status">{item.active ? 'Active' : 'Inactive'}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};