import React from 'react';

import {
	HashRouter as Router,
	Route
} from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';

import {
	faLinkedin,
	faGithub,
	faJsSquare,
	faPython,
	faPhp,
	faNode,
	faReact,
	faCss3,
	faAndroid,
	faKorvue
} from '@fortawesome/free-brands-svg-icons';
import {
	faEnvelope
} from '@fortawesome/free-solid-svg-icons';


// import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Certification from './views/Certification';
import Skills from './views/Skills';
import Experience from './views/Experience';
import Education from './views/Education';

function App(){
	library.add(
		faLinkedin, 
		faGithub, 
		faEnvelope,
		faJsSquare,
		faPython,
		faPhp,
		faNode,
		faReact,
		faCss3,
		faAndroid,
		faKorvue
	);

	return (
		<Router>
			<div>
				{/* <Route path="/" exact component={Home} /> */}
				<Route path="/experience" component={Experience} />
				<Route path="/education" component={Education} />
				<Route path="/skills" component={Skills} />
				<Route path="/certification" component={Certification} />
				<Route path="/contact" component={Contact} />
				<Route path="/" exact component={About} />
			</div>
		</Router>
	);
}
		
export default App;
		