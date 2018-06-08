import React from 'react'
import '../index.css'
import StartButton from './StartButton'

const About = () =>
	<div className="HomePage">
		<div className="StartButton-container"><StartButton/></div>
		<div className="About-body">
			<h1 className="About-title">
				About Yz (wise) Finance
			</h1>

			<div className="About-contents">
				<div className="About-contents-box">
					<h3><a href="#javascript-frameworks">Node.js Frameworks</a></h3>
					<li>Express.js</li>
					<li>React.js</li>
					<li>Redux.js</li>
					<li>React Router</li>
				</div>

				<div className="About-contents-box">
					<h3><a href="#web-scraping">Web Scraping</a></h3>
					<li>Selenium</li>
					<li>Yahoo Finance</li>
					<li>WebDriver API</li>
					<li>Chromium</li>
				</div>

				<div className="About-contents-box">
					<h3><a href="#database">Database</a></h3>
					<li>SQLite</li>
					<li>SQLite-jdbc</li>
					<li>node-sqlite3</li>
				</div>

				<div className="About-contents-box">
					<h3><a href="#hosting-environment">Hosting Environment</a></h3>
					<li>Linode</li>
					<li>Arch Linux</li>
					<li>Security / Server Hardening</li>
					<li>Domain Name Registration</li>
				</div>
			</div>

			<article>
				<h2 id="javascript-frameworks">JavaScript Frameworks</h2>
				<h3><a href="https://www.nodejs.org">Node.js</a></h3>
				<p>
					<code>Node.JS</code> is a cross-platform JavaScript run-time environment that executes JS code server-side.
					I elected to build a project around the Node.js framework because it is versatile and extremely popular, with a vast repository of web-dev packages supported by a thriving open-source community.
					All this accounts for why Node.js presently one of the hottest technologies in the web development universe.
				</p>

				<h3><a href="https://www.reactjs.org">Express.js</a></h3>
				<p>
					<code>Express.js</code> is a minimalist Node.js framework for web applications.
					It is used here for serving JSON objects at the API endpoints.
				</p>

				<h3><a href="https://www.reactjs.org">React.js</a></h3>
				<p>
					<code>React.js</code> is a JavaScript library for creating responsive user interfaces.
					Built atop the Node package system, React implements a design paradigm of discrete so-called 'compositable components' to streamline development of elegant web applications that avoid the pitfalls of unwieldy, monolithic and tightly-coupled codebases that rapidly become unmanageable.
					React also avails the <code>JSX syntax</code>, which conveniently resembles the structure of HTML while allowing developers to eschew the syntactic verbosity of vanilla JavaScript.
				</p>

				<h3><a href="https://redux.js.org">Redux.js</a></h3>
				<p>
					The <code>Redux.js</code> JavaScript library is a state management engine that works exceptionally well with React.js to create an immutable model of what is viewed in the web browser.
					Using react-redux state/property mappings and redux connect to dispatch actions, I was about to create navigation features that are wired up with triggers so that a change in my navigation box is reflected instantly with a new page view and uniformly throughout my application state model.
				</p>

				<h3><a href="https://reacttraining.com/react-router">React Router</a></h3>
				<p>
					<code>React Router</code>  is a Node package that implements navigation components and routing through a declarative programming model.
					Using parameters from the URL path rather than Global State Data greatly simplified navigation, and has the additional benefit of creating a unique URL route for every point in the dataset.
				</p>
			</article>

			<article>
				<h2 id="web-scraping">Web Scraping</h2>
				<h3><a href="https://finance.yahoo.com/cryptocurrencies">YahooFinance</a></h3>
				<p>
					<code>Yahoo! Finance</code> is a free web resource and financial portfolio service from which the contents of the SQLite database are derived. It is public and reliable, although the implementation has tended to mutate on occasion.
					<code>finance.yahoo.com/cryptocurrencies</code>
				</p>

				<h3><a href="https://www.seleniumhq.org">Selenium</a></h3>
				<p>
					The actual web-scraping is achieved with the <code>Selenium</code> web browser automation framework, which makes it possible to interact with (and retrieve data from) web resources through various programmatic methods.
					A scraper I created in Java to fetch data from the dynamic contents of the Yahoo Finance page is available in this <a href="https://www.github.com/fossnik/SeleniumScraper">separate web-scraper project</a>, which implements the Chrome WebDriver.
					The Scraper runs autonomously as a Cron process on my Linode, committing market snapshots to my SQL database.
				</p>

				<h3><a href="https://sites.google.com/a/chromium.org/chromedriver">Chrome WebDriver</a></h3>
				<p>
					Selenium's <code>WebDriver Wire Protocol</code> is an API that facilitates the exchange of information between a web browser client (implementations for the WebDriver interface exist for Chrome, Firefox, Safari and others)
					Although I generally prefer to use Firefox, in this case I decided to use the Chrome WebDriver over the Gecko WebDriver under the impression that it is more actively supported.
				</p>

				<h3><a href="https://sites.google.com/a/chromium.org">Chromium</a></h3>
				<p>
					<code>Chromium</code> is the open-source web browser development project from whence "Google Chrome" is actively derived.
					In other words, Chromium is the unbranded version of Google Chrome, and for Arch Linux, the only available option.
					Getting Chrome WebDriver to work with Chromium required creating a symbolic filesystem link between where the Chromium binary is and where Selenium expects "Google Chrome" to be - essentially creating a pseudo file that can be executed as if it were "Google Chrome".
					Installing Chromium was particularly painful because, clocking in at over 700 MiB, it takes a massive bite out of what little overhead is left in on my 4 GiB filesystem.
					It is generally a poor idea to use such a minute filesystem, I felt it demonstrated the minimalist ethic of this project.
				</p>
			</article>

			<article>
				<h2 id="database">Database</h2>
				<h3><a href="https://www.sqlite.org">SQLite</a></h3>
				<p>
					<code>SQLite</code> is an open-source relational database management system that is one of most popular among a myriad of competing SQL-style database products. Although these are largely interchangeable, SQLite does appear to be a favorite in the world of Java and JavaScript because of it's active development, strong user-base, and vital support community.
				</p>

				<h3><a href="http://www.sqlitetutorial.net/sqlite-java/sqlite-jdbc-driver">SQLite-jdbc</a></h3>
				<p>
					The <code>SQLite-jdbc driver</code> for the Java Database Connector (JDBC) interfaces the Selenium web-scraper with the SQLite database in order to create a durable SQL database and append records.
				</p>

				<h3><a href="http://www.sqlitetutorial.net/sqlite-nodejs">node-sqlite3</a></h3>
				<p>
					The <a href="https://github.com/mapbox/node-sqlite3">SQLite3</a> Node.js module facilitates retrieval of database records to be represented visually on the frontend side, via the Express.js API, which performs SQL queries on the SQLite database.
				</p>
			</article>

			<article>
				<h2 id="hosting-environment">Hosting Environment</h2>
				<h3><a href="https://www.linode.com">Linode</a></h3>
				<p>
					A <code>Linode container</code> is an affordable virtual GNU/Linux web server environment hosted in the cloud.
					This project is hosted there in its entirety at the grand cost of only $5 per month.
					The two Node.js projects that comprise this interactive web application include the Express.js project serving up API endpoints, and a React.js package to represent the queried data.
					The least expensive service tier appears more than sufficient.
					<code>
						<li>Linux version 4.16.7-1-ARCH</li>
						<li>1024MB RAM</li>
						<li>4096GB HDD</li>
						<li>1TB Data Cap</li>
					</code>
				</p>

				<h3><a href="https://www.archlinux.org">Arch Linux</a></h3>
				<p>
					I used ArchLinux for my Linode container because it is a minimalist-oriented distro with a robust support community (and superb documentation).
					Arch Linux insists on early support of the most bleeding-edge new kernels and packages.
					This made it necessary to utilize Node's <a href="https://www.npmjs.com/package/n">npm n</a> version management package to ensure compatibility with all the required packages of this project.
					In particular, the <code>node-sqlite3</code> package does not yet provide binaries ready for <code>Node.js (version 10.0)</code> (provided by the Arch Linux package repository).
					<code>n</code> allows for convenient access to the better-supported <code>Node.js (version 9.11.1)</code>.
				</p>

				<h3>Security / System Hardening</h3>
				<p>
					Server hardening and other security considerations are extremely important when s a hosting environment.
					Although this is an extensive topic, the basic considerations in this project were:
					<li>Creating a non-root user account with restricted privileges and using sudo as a matter of course.</li>
					<li>Disabling remote log-in to the root account.</li>
					<li>Enforcing RSA-key authentication regime for SSH access.</li>
					<li>Disable and remove unnecessary daemons and services that listen actively on net ports.</li>
					<li>Configure iptables or other firewall tolerate only a narrow range of essential net traffic.</li>
					<li>Use fail2ban to lock out attackers after repeated failed attempts at login.</li>
					<li>ALWAYS keep software up to date with the latest security patches.</li>
				</p>

				<h3>Domain Name Registration</h3>
				<p>
					I registered the domain name <a href="http://www.yzfinance.org">yzfinance.org</a> through the DNS registration service at <a href="http://www.1and1.com">1and1.com</a><br/>
					Considerations were the cheap availability of a <code>.org</code> TLD for only $3.99, and that the 1&1 service allows for using Linode's own DNS Name Servers.
				</p>
			</article>
			<div className='PageEnd'/>
		</div>
	</div>;

export default About