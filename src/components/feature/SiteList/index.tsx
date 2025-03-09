"use client"; 
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@stores';
import { addClient, fetchClients, getClients } from '@stores/slices/clients';
import { getSites } from '@stores/slices/sites';
import { ClientTypes, SiteTypes, SiteClientsTypes } from '@types';
import { updateMap } from '@components/feature/Map/mapManager';

import './index.scss';

export const SiteList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const clients = useSelector<RootState, ClientTypes>(getClients);
    const sites = useSelector<RootState, SiteTypes[]>(getSites);
    const [getTableData, setgetTableData] = useState<SiteClientsTypes[]>([]);
    const [getTableView, setTableView] = useState<string>("sites");
    const [getSort, setSort] = useState({ key: 'name', dir: 'asc' });

    /* Get Clients & Update Store */
    useEffect(()=>{
        dispatch(fetchClients());
    }, []);

    /* Generate Site List */
    useEffect(()=>{

        /* Merge Data For Site List */
        if (clients.data.length > 0 && sites.length > 0) {
            const mergedData = sites.map(site => {
                const client = clients.data.find(client => client.id === site.clientId)!; // ! Assert, because we know Site cannot exist without Client
                return {
                    ...site,
                    clientId: client.id,
                    clientName: client.name,
                    clientActive: client.active,
                };
            });
            if (mergedData.length > 0) setgetTableData(mergedData);
        };

    }, [clients, sites, getTableView]);

    /* Pan Map */
    function mapPan(coords: { lat: number; lng: number; }) {
        updateMap((m)=>{
            m.flyTo({
                center: [coords.lng, coords.lat],
                pitch: 50,
                zoom: 18,
                bearing: 0,
                duration: 4000,
            })
        });
    };



///// make it zoom in on country to fit into bounds



    /* Focus Map */
    function mapFocus(lat: number, lng: number) {
        updateMap((m)=>{
            m.flyTo({
                center: [lng, lat],
                pitch: 0,
                zoom: 8,
                bearing: 0,
                duration: 4000,
            })
        });
    };

    /* Reset Map */
    function resetMap() {
        updateMap((m)=>{
            m.flyTo({
                pitch: 0,
                zoom: 3,
                bearing: 0,
                duration: 4000,
            })
        });
    };

    /* Test Add Client */
    const handleAdd =()=> {
        dispatch(addClient({
            id: 2,
            name: 'd',
            active: false,
        }));
    };

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

            <div className="actions">
                <div className="search">
                    <i className="far fa-search" />
                    <input className="input" />
                </div>
                <div className="map-controls">
                    <div onClick={resetMap}><i className="fa fa-undo" /></div>
                    <div><i className="fa fa-dot-circle" /></div>
                    <div><i className="far fa-bookmark" /></div>
                </div>
                {/*<div className="filter"><i className="far fa-filter" /></div>*/}
                <div className="by-feature">
                    <div className={`item ${getTableView === 'sites' ? 'active' : ''}`} onClick={()=>setTableView('sites')}>
                        <div className="icon"><i className="fa fa-building" /></div>
                        <div className="label">By Sites</div>
                    </div>
                    {/*<div className={`item ${getTableView === 'clients' ? 'active' : ''}`} onClick={()=>setTableView('clients')}>
                        <div className="icon"><i className="fa fa-users" /></div>
                        <div className="label">By Clients</div>
                    </div>*/}
                    <div className={`item ${getTableView === 'workorders' ? 'active' : ''}`} onClick={()=>setTableView('workorders')}>
                        <div className="icon"><i className="fa fa-list" /></div>
                        <div className="label">By Workorders</div>
                    </div>
                    <div className={`item ${getTableView === 'personnel' ? 'active' : ''}`} onClick={()=>setTableView('personnel')}>
                        <div className="icon"><i className="fa fa-user" /></div>
                        <div className="label">By Personnel</div>
                    </div>
                </div>
            </div>

            <div className="content">
                <table>
                    <thead>
                        <tr>

                            {/* These can be rendered from an array of Table Column Data, but for now, just a demo... */}
                            <td className="site" data-sort="name" onClick={()=>sort('name')}>
                                Site 
                                <span className="ml-2">
                                    <i className={`fa fa-caret-${getSort.key === 'name' ? (getSort.dir === 'asc' ? 'up' : 'down') : 'down'}`} />
                                </span>
                            </td>
                            <td className="client" data-sort="clientName" onClick={()=>sort('clientName')}>
                                Client 
                                <span className="ml-2">
                                    <i className={`fa fa-caret-${getSort.key === 'clientName' ? (getSort.dir === 'asc' ? 'up' : 'down') : 'down'}`} />
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
                        {getTableData
                            .sort((a: SiteClientsTypes, b: SiteClientsTypes) => {
                                const { key, dir } = getSort;
                                if (a[key as keyof SiteClientsTypes] < b[key as keyof SiteClientsTypes]) return dir === 'asc' ? -1 : 1;
                                if (a[key as keyof SiteClientsTypes] > b[key as keyof SiteClientsTypes]) return dir === 'asc' ? 1 : -1;
                                return 0;
                            })
                            .map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td className="site" onClick={()=>mapPan(item.coords)}><i className="marker fa fa-map-marker-alt mr-2" /> {item.name}</td>
                                        <td className="client"><i className="marker fa fa-link mr-2" /> {item.clientName}</td>
                                        <td className="location" onClick={()=>mapFocus(item.locationLat, item.locationLng)}><i className="marker fa fa-map mr-2" /> {item.location}</td>
                                        <td className="on-duty"><i className="marker fa fa-user mr-2" /> {item.clockedIn || 'N/A'}</td>
                                        <td className="status" onClick={handleAdd}><i className="marker fa fa-check mr-2" /> {item.active ? 'Active' : 'Inactive'}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};