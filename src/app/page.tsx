import { MapsFrontPage } from './components/maps/frontpage';
import './page.scss';

export default function Home() {

	return (
		<div className="dashboard">

			{/* Head: Context, Navigation, Quick Actions & Profile */}
			<div className="head">
				<div className="container">
					<div className="icon"><i className="fa fa-clipboard" /></div>
					<div className="context">
						<div>Clients</div>
						<div>Sites</div>
					</div>
					<div className="navigation">
						<div className="item">Home</div>
						<div className="item">Work Orders</div>
						<div className="item">Safety</div>
						<div className="item">Personnel</div>
						<div className="item">Reports</div>
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
							<div className="item">
								<div className="icon"><i className="far fa-list-alt" /></div>
								<div className="label">Open Work Orders</div>
								<div className="value">27</div>
								<div className="flip"><i className="far fa-chart-bar" /></div>
							</div>
							<div className="item">
								<div className="icon"><i className="far fa-money-bill-alt" /></div>
								<div className="label">Cost Summary <span>(02/10/25 - 04/02/25)</span></div>
								<div className="value">$1989</div>
							</div>
							<div className="item">
								<div className="icon"><i className="far fa-users" /></div>
								<div className="label">Personnel On Duty</div>
								<div className="value">39</div>
							</div>
						</div>
						<div className="sites-map"><MapsFrontPage /></div>
						<div className="sites-list">Site List</div>
					</div>

					{/* Minimal Contents */}
					<div className="calendar">
						<div>Quick News</div>
						<div>Calendar</div>
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
