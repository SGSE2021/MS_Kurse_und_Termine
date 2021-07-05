import { Button } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const AppointmentScreen = () => {
	return (
		<div>
			<Link to="/appointments/display">
				<Button>Alle anzeigen</Button>
			</Link>
			<Link to="/appointments/create">
				<Button>Termin anlegen</Button>
			</Link>
		</div>
	);
};

export default AppointmentScreen;
