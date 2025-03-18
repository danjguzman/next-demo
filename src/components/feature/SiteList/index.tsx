"use client";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@stores';
import { getClients } from '@stores/slices/clients';
import { getSites } from '@stores/slices/sites';
import { IClients, ISites, ISiteClients } from '@types';
import { updateMap } from '@components/feature/Map/mapManager';
import './index.scss';

export const SiteList: React.FC = () => {
    const clients   = useSelector<RootState, IClients[]>(getClients);
    const sites     = useSelector<RootState, ISites[]>(getSites);
    const [getTableData, setgetTableData] = useState<ISiteClients[]>([]);
    const [getTableView, setTableView] = useState<string>("sites");
    const [getSort, setSort] = useState({ key: 'name', dir: 'asc' });

    /* Generate Site List */
    useEffect(() => {

        /* Merge Data For Site List */
        if (clients.length > 0 && sites.length > 0) {
            //console.log("clients", clients);
            const mergedData = sites.map(site => {
                const client = clients.find(client => client.id === site.clientId)!; // ! Assert, because we know Site cannot exist without Client
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
        updateMap((m) => {
            m.flyTo({
                center: [coords.lng, coords.lat],
                pitch: 50,
                zoom: 18,
                bearing: 0,
                duration: 4000,
            })
        });
    };

    /* Focus Map */
    //function mapFocus(lat: number, lng: number, zoom: number = 8) {
    //    updateMap((m) => {
    //        m.flyTo({
    //            center: [lng, lat],
    //            pitch: 35,
    //            zoom,
    //            bearing: 0,
    //            duration: 4000,
    //        })
    //    });
    //};

    /* Focus Map */
    function mapFocusCountry(countryCoords: number[]) {
        updateMap((m) => {
            m.fitBounds([
                [countryCoords[0], countryCoords[1]], // Southwest coordinates [lng, lat]
                [countryCoords[2], countryCoords[3]]  // Northeast coordinates [lng, lat]
            ], {
                //padding: 50,
                pitch: 35,
                bearing: 0,
                duration: 4000,
            });

        });
    };

    /* Reset Map */
    function resetMap() {
        updateMap((m) => {
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
        //dispatch(setStoreClients({
        //    id: 2,
        //    name: 'd',
        //    active: false,
        //}));
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
                    <div className={`item ${getTableView === 'sites' ? 'active' : ''}`} onClick={() => setTableView('sites')}>
                        <div className="icon"><i className="fa fa-building" /></div>
                        <div className="label">By Work Sites</div>
                    </div>
                    {/*<div className={`item ${getTableView === 'clients' ? 'active' : ''}`} onClick={()=>setTableView('clients')}>
                        <div className="icon"><i className="fa fa-users" /></div>
                        <div className="label">By Clients</div>
                    </div>*/}
                    <div className={`item ${getTableView === 'workorders' ? 'active' : ''}`} onClick={() => setTableView('workorders')}>
                        <div className="icon"><i className="fa fa-list" /></div>
                        <div className="label">By Work Orders</div>
                    </div>
                    <div className={`item ${getTableView === 'personnel' ? 'active' : ''}`} onClick={() => setTableView('personnel')}>
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
                            <td className="site" data-sort="name" onClick={() => sort('name')}>
                                Site
                                <span className="ml-2">
                                    <i className={`fa fa-caret-${getSort.key === 'name' ? (getSort.dir === 'asc' ? 'up' : 'down') : 'down'}`} />
                                </span>
                            </td>
                            <td className="client" data-sort="clientName" onClick={() => sort('clientName')}>
                                Client
                                <span className="ml-2">
                                    <i className={`fa fa-caret-${getSort.key === 'clientName' ? (getSort.dir === 'asc' ? 'up' : 'down') : 'down'}`} />
                                </span>
                            </td>
                            <td className="location" data-sort="location" onClick={() => sort('location')}>
                                Country
                                <span className="ml-2">
                                    <i className={`fa fa-caret-${getSort.key === 'location' ? (getSort.dir === 'asc' ? 'up' : 'down') : 'down'}`} />
                                </span>
                            </td>
                            <td className="on-duty" data-sort="clockedIn" onClick={() => sort('clockedIn')}>
                                On Duty
                                <span className="ml-2">
                                    <i className={`fa fa-caret-${getSort.key === 'clockedIn' ? (getSort.dir === 'asc' ? 'up' : 'down') : 'down'}`} />
                                </span>
                            </td>
                            <td className="status" data-sort="active" onClick={() => sort('active')}>
                                Status
                                <span className="ml-2">
                                    <i className={`fa fa-caret-${getSort.key === 'active' ? (getSort.dir === 'asc' ? 'up' : 'down') : 'down'}`} />
                                </span>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {getTableData
                            .sort((a: ISiteClients, b: ISiteClients) => {
                                const { key, dir } = getSort;
                                if (a[key as keyof ISiteClients] < b[key as keyof ISiteClients]) return dir === 'asc' ? -1 : 1;
                                if (a[key as keyof ISiteClients] > b[key as keyof ISiteClients]) return dir === 'asc' ? 1 : -1;
                                return 0;
                            })
                            .map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td className="site" onClick={() => mapPan(item.coords)}>
                                            <i className="marker fa fa-map-marker-alt mr-2" /> {item.name}
                                            </td>
                                        <td className="client"><i className="marker fa fa-link mr-2" /> {item.clientName}</td>
                                        <td className="location" onClick={() => mapFocusCountry([
                                            item.countryCoords.lngSouthWest,
                                            item.countryCoords.latSouthWest,
                                            item.countryCoords.lngNorthEast,
                                            item.countryCoords.latNorthEast,
                                        ])}>
                                            <i className="marker fa fa-map mr-2" /> {item.location}
                                        </td>
                                        <td className="on-duty">
                                            <i className="marker fa fa-user mr-2" /> {item.clockedIn || 'N/A'}
                                        </td>
                                        <td className="status" onClick={handleAdd}>
                                            <i className="marker fa fa-check mr-2" /> {item.active ? 'Active' : 'Inactive'}
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};