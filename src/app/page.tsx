import { MapsFrontPage } from './components/Maps/FrontPage';
import { SiteList } from './components/SiteList';
import { Card } from '@core/components/Cards';
import { mockHomePageSummary } from '@core/_server-data';
import { CardOpenWorkOrders } from '@components/Cards';
import Calendar from 'react-calendar';
import './page.scss';
//import 'react-calendar/dist/Calendar.css';

export default function Home() {

	return (
		<div className="dashboard">

			{/* Head: Context, Navigation, Quick Actions & Profile */}
			<div className="head">
				<div className="container">
					{/*<div className="icon"><i className="fa fa-clipboard" /></div>*/}
					<div className="navigation">
						<div className="item"><i className="fa fa-home" /> Home</div>
						<div className="item"><i className="fa fa-clipboard" /> Work Orders</div>
						<div className="item"><i className="fa fa-user-friends" /> Personnel</div>
						<div className="item"><i className="fa fa-file-alt" /> Reports</div>
					</div>
					<div className="context">
						<div>Clients</div>
						<div>Sites</div>
					</div>
					<div className="actions">
						<div className="icon"><i className="fa fa-envelope" /></div>
						<div className="icon"><i className="fa fa-bell" /></div>
					</div>
					<div className="profile">
						<div><i className="fa fa-th" /></div>
						<div><i className="fa fa-user" /></div>
					</div>
				</div>
			</div>

			{/* Body: Main Contents */}
			<div className="body">

				{/* Welcome Banner */}
				<div className="welcome">
					<div className="left">
						<div className="hello">Welcome back,</div>
						<div className="notify">You have <span>2</span> new messages and <span>10</span> new notifications.</div>
					</div>
					<div className="right">
						<div className="icons"><i className="fa fa-caret-left" /></div>
						<div className="dates">Feb 10, 2025 <i className="fa fa-arrows-alt-h" /> Apr 2nd, 2025</div>
						<div className="icons"><i className="fa fa-caret-right" /></div>
					</div>
				</div>

				{/* Content Container */}
				<div className="container">

					{/* Main Contents */}
					<div className="main">
						<div className="bubbles">
							<CardOpenWorkOrders />
							{/*<Card icon="far fa-list-alt" label="Open Work Orders" value={mockHomePageSummary.openWorkOrders} flip={true} />
							<Card icon="far fa-money-bill-alt" label="Billing Summary" value={mockHomePageSummary.billingSummary} valueFormat="USD" />
							<Card icon="far fa-users" label="Personnel On Duty" value={mockHomePageSummary.personnelOnDuty} />*/}
						</div>

{/* wrap maps section in a div to make it fancier....... */}

						<div className="sites-map"><MapsFrontPage /></div>
						<div className="sites-list"><SiteList /></div>
					</div>

					{/* Minimal Contents */}
					<div className="calendar">
						<div>Quick News</div>
						<div>
							<Calendar value={new Date()} />
						</div>
					</div>
				</div>

			</div>

			{/* Foot */}
			<div className="foot">
				<div className="recent">Recent Navigation</div>
			</div>
		</div>
	);
}
