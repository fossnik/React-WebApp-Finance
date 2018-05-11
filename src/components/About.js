import React from 'react'
import '../index.css'

const About = () => {
	return <div className="About-body">
		<h1 className='About-title'>
		About Yz (wise) Finance
		</h1>

		<div className="About-contents">
			<div className="About-contents-box">
				<h3><a href="#javascript-frameworks">JavaScript Frameworks</a></h3>
				<li>Node.js</li>
				<li>Express.js</li>
				<li>React.js</li>
			</div>

			<div className="About-contents-box">
				<h3><a href="#web-scraping">Web Scraping</a></h3>
				<li>Selenium</li>
				<li>Yahoo Finance</li>
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
				<li>Security / System Hardening</li>
			</div>
		</div>

		<article>
			<h2 id="javascript-frameworks">JavaScript Frameworks</h2>
			<h3><a href="https://www.nodejs.org">Node.js</a></h3>
			<p>
				<code>Node.JS</code> is a cross-platform JavaScript run-time environment that executes JS code server-side. I
				elected to build a project around the Node.js framework because it is versatile and extremely popular, being
				supported by a large open-source community, and is presently one of the hottest technologies in the web
				development universe.
			</p>

			<h3><a href="https://www.reactjs.org">Express.js</a></h3>
			<p>
				<code>Express.js</code> is a minimalist Node.js framework for web applications. It is used here for serving
				JSON objects at the API endpoints.
			</p>

			<h3><a href="https://www.reactjs.org">React.js</a></h3>
			<p>
				<code>React.js</code> is a JavaScript library for creating responsive user interfaces. Built atop the Node
				package system, React implements a design paradigm of discrete so-called 'compositable components' to aid
				development of robust web applications that avoid the pitfalls unwieldy monolithic and tightly-coupled
				codebases that rapidly become unmanageable. React also avails the <code>JSX syntax</code>, which
				conveniently resembles the structure of HTML while allowing developers to eschew the excessive verbosity of
				plain JavaScript.
			</p>
		</article>

		<article>
			<h2 id="web-scraping">Web Scraping</h2>
			<h3><a href="https://www.seleniumhq.org">Selenium</a></h3>
			<p>
				The actual web-scraping is achieved with the <code>Selenium</code> web browser automation framework, which
				makes it possible to interact with dynamic websites in a programmatic (and highly versatile) manner.
				A scraper I created in Java to fetch data from the dynamic contents of the Yahoo Finance page is available in
				this <a href="https://www.github.com/fossnik/SeleniumScraper">separate web-scraper project</a>, which
				implements the Chrome WebDriver.
			</p>

			<h3><a href="https://finance.yahoo.com/cryptocurrencies">YahooFinance</a></h3>
			<p>
				<code>Yahoo! Finance</code> is a free web service and portfolio management resource from which the contents
				of the SQLite database are derived. It is public and reliable, although the implementation has tended to
				mutate on occasion. <code>finance.yahoo.com/cryptocurrencies</code>
			</p>
		</article>

		<article>
			<h2 id="database">Database</h2>
			<h3><a href="https://www.sqlite.org">SQLite</a></h3>
			<p>
				<code>SQLite</code> is an open-source relational database management system that is one of most popular among
				a myriad of competing SQL-style database products. Although these are largely interchangeable, SQLite does
				appear to be a favorite in the world of Java and JavaScript because of it's active development, strong
				user-base, and vital support community.
			</p>

			<h3><a href="http://www.sqlitetutorial.net/sqlite-java/sqlite-jdbc-driver">SQLite-jdbc</a></h3>
			<p>
				The <code>SQLite-jdbc driver</code> for the Java Database Connector (JDBC) interfaces the Selenium
				web-scraper with the SQLite database in order to create a durable SQL database and append records.
			</p>

			<h3><a href="http://www.sqlitetutorial.net/sqlite-nodejs">node-sqlite3</a></h3>
			<p>The <a href="https://github.com/mapbox/node-sqlite3">SQLite3</a> Node.js module facilitates retrieval of
				database records to be represented visually on the frontend side, via the Express.js API, which performs SQL
				queries on the SQLite database.
			</p>
		</article>

		<article>
			<h2 id="hosting-environment">Hosting Environment</h2>
			<h3><a href="https://www.linode.com">Linode</a></h3>
			<p>
				A <code>Linode container</code> is an affordable virtual GNU/Linux web server environment hosted in the
				cloud.
				This project is hosted there in its entirety at the grand cost of only $5 per month.
				The two Node.js projects that comprise this interactive web application include the Express.js project
				serving up API endpoints, and a React.js package to represent the queried data.
				The least expensive service tier appears more than sufficient.
				<code>Linux version 4.16.7-1-ARCH</code>
				<code>1024MB RAM</code>
				<code>4096GB HDD</code>
				<code>1TB Data Cap</code>
			</p>

			<h3><a href="https://www.archlinux.org">Arch Linux</a></h3>
			<p>
				I used ArchLinux for my Linode container because it is a minimalist-oriented distro with a robust support
				community (and superb documentation).
				Arch Linux insists on early support of the most bleeding-edge new kernels and packages. This made it
				necessary to utilize Node's <a href="https://www.npmjs.com/package/n">npm n</a> version
				management package to ensure compatibility with all the required packages of this project. In particular,
				the <code>node-sqlite3</code> package does not yet provide binaries ready for <code>Node.js (version
				10.0)</code> (provided by the Arch Linux package repository). <code>n</code> allows for convenient
				access to the better-supported <code>Node.js (version 9.11.1)</code>.
			</p>

			<h3>Security / System Hardening</h3>
			<p>
				Server hardening and other security considerations a extremely important when crafting a hosting environment. Although this is an extensive topic, the basic considerations in this project were:
				<ul>
					<li>Creating a non-root user account with restricted privileges and using sudo as a matter of course.</li>
					<li>Disabling remote log-in to the root account.</li>
					<li>Enforcing RSA-key authentication regime for SSH access.</li>
					<li>Disable and remove unnecessary daemons and services that listen by default.</li>
					<li>Configure iptables or other firewall accept only a narrow range of essential net traffic, and block other traffic by default.</li>
					<li>Use fail2ban or another intrusion prevention system to neutralize repeatedly failed attempts at login.</li>
					<li>ALWAYS keep software up to date with the latest security patches.</li>
				</ul>
			</p>
		</article>
	</div>
};

export default About