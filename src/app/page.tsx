import { InitData } from '@components/init/init';
import { MapsFrontPage } from '@components/feature/Map';
import { SiteList } from '@components/feature/SiteList';
import { CardOpenWorkOrders, CardBillingSummary, CardPersonnelClockedIn } from '@components/feature/Cards';
import './page.scss';

/* Entry Page */
export default function Home() {

	return (
		<div className="dashboard">
			<InitData />

			{/* Head: Context, Navigation, Quick Actions & Profile */}
			<div className="head">
				<div className="container">
					{/*<div className="icon"><i className="fa fa-clipboard" /></div>*/}
					<div className="navigation">
						<div><i className="fa fa-th" /></div>
						{/*<div className="item"><i className="fa fa-home" /> Welcome Back</div>*/}
						{/*<div className="item"><i className="fa fa-clipboard" /> Work Orders</div>
						<div className="item"><i className="fa fa-user-friends" /> Personnel</div>
						<div className="item"><i className="fa fa-file-alt" /> Reports</div>*/}
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
						{/*<div><i className="fa fa-th" /></div>*/}
						<div><i className="fa fa-user" /></div>
					</div>
				</div>
			</div>

			{/* Body: Main Contents */}
			<div className="body">

				{/* Welcome Banner */}
				{/*<div className="welcome">
					<div className="left">
						<div className="hello">Welcome back,</div>
						<div className="notify">You have <span>2</span> new messages and <span>10</span> new notifications.</div>
					</div>
					<div className="right">
						<div className="icons"><i className="fa fa-caret-left" /></div>
						<div className="dates">Feb 10, 2025 <i className="fa fa-arrows-alt-h" /> Apr 2nd, 2025</div>
						<div className="icons"><i className="fa fa-caret-right" /></div>
					</div>
				</div>*/}

				{/* Content Container */}
				<div className="container">

					{/* Main Contents */}
					<div className="main">
						<div className="bubbles">
							<CardOpenWorkOrders />
							<CardBillingSummary />
							<CardPersonnelClockedIn />
						</div>
						<div className="sites-map-list">
							<div className="sites-map">
								<div className="map"><MapsFrontPage /></div>
								{/*<div className="viewer">123</div>*/}
							</div>
							<div className="sites-list"><SiteList /></div>
						</div>
					</div>

					{/* Side Contents */}
					{/*<div className="right">
						<div className="top"></div>
						<div className="bottom"></div>
					</div>*/}

				</div>

			</div>

			{/* Foot */}
			<div className="foot">
				<div className="recent">
					Demo App is currently under live development. Check <a href="https://github.com/danjguzman/next-demo" target="_blank" rel="noopener noreferrer">https://github.com/danjguzman/next-demo</a> for frequent updates. <i>(Not yet responsive.)</i>
				</div>
			</div>

			{/* Color Overlay */}
			<div className="color-overlay"></div>
			
		</div>
	);
};