# Yz (wise) Finance Project

### [JavaScript Frameworks](#javascript-frameworks-1)
- Node.js
- Express.js
- React.js
- Redux.js

### [Web Scraping](#web-scraping-1)
- Selenium
- Yahoo Finance

### [Database](#database-1)
- SQLite
- SQLite-jdbc
- node-sqlite3

### [Hosting Environment](#hosting-environment-1)
- Linode
- Arch Linux
- Security

## JavaScript Frameworks
### [Node.js](https://www.nodejs.org)
`Node.JS` is a cross-platform JavaScript run-time environment that executes JS code server-side. I elected to build a project around the Node.js framework because it is versatile and extremely popular, with a vast repository of web-dev packages supported by a thriving open-source community. All this accounts for why Node.js presently one of the hottest technologies in the web development universe.

### [Express.js](https://www.reactjs.org)
`Express.js` is a minimalist Node.js framework for web applications. It is used here for serving JSON objects at the API endpoints.

### [React.js](https://www.reactjs.org)
`React.js` is a JavaScript library for creating responsive user interfaces. Built atop the Node package system, React implements a design paradigm of discrete so-called 'compositable components' to streamline development of elegant web applications that avoid the pitfalls of unwieldy, monolithic and tightly-coupled codebases that rapidly become unmanageable. React also avails the `JSX syntax`, which conveniently resembles the structure of HTML while allowing developers to eschew the syntactic verbosity of plain JavaScript.

### [Redux.js](https://redux.js.org)
The `Redux.js` JavaScript library is a state management engine that works exceptionally well with React.js to create an immutable model of what is viewed in the web browser.  Using react-redux state/property mappings and redux connect to dispatch actions, I was about to create navigation features that are wired up with triggers so that a change in my navigation box is reflected instantly with a new page view and uniformly throughout my application state model.

## Web Scraping
### [Selenium](https://www.seleniumhq.org)
The actual web-scraping is achieved with the <code>Selenium</code> web browser automation framework, which makes it possible to interact with (and retrieve data from) web resources through various programmatic methods.
A scraper I created in Java to fetch data from the dynamic contents of the [yahoo finance](https://finance.yahoo.com/cryptocurrencies) page is available in this [separate web-scraper project](https://www.github.com/fossnik/SeleniumScraper), which implements the Chrome WebDriver.

### [YahooFinance](finance.yahoo.com)
`Yahoo! Finance` is a free web resource and financial portfolio service from which the contents of the SQLite database are derived. It is public and reliable, although the implementation has tended to mutate on occasion. `finance.yahoo.com/cryptocurrencies`

## Database
### [SQLite](https://www.sqlite.org)
`SQLite` is an open-source relational database management system that is one of most popular among a myriad of competing SQL-style database products. Although these are largely interchangeable, SQLite does appear to be a favorite in the world of Java and JavaScript because of it's active development, strong user-base, and vital support community.

### [SQLite-jdbc](http://www.sqlitetutorial.net/sqlite-java/sqlite-jdbc-driver)
The `SQLite-jdbc driver` for the Java Database Connector (JDBC) interfaces the Selenium web-scraper with the SQLite database in order to create a durable SQL database and append records.

### [node-sqlite3](http://www.sqlitetutorial.net/sqlite-nodejs)
The [SQLite3](https://github.com/mapbox/node-sqlite3) Node.js module facilitates retrieval of database records to be represented visually on the frontend side, via the Express.js API, which performs SQL queries on the SQLite database. 

## Hosting Environment
### [Linode](https://www.linode.com)
A `Linode container` is an affordable virtual GNU/Linux web server environment hosted in the cloud. 
This project is hosted there in its entirety at the grand cost of only $5 per month.
The two Node.js projects that comprise this interactive web application include the Express.js project serving up API endpoints, and a React.js package to represent the queried data.
The least expensive service tier appears more than sufficient.
 `Linux version 4.16.7-1-ARCH`
 `1024MB RAM`
 `4096GB HDD`
 `1TB Data Cap`

### [Arch Linux](https://www.archlinux.org)
I used Arch for my Linode container because it is a minimalist-oriented GNU/Linux distribution with a robust support community (and superb documentation).
Arch Linux insists on early support of the most bleeding-edge new kernels and packages. This made it necessary to utilize Node's [npm n](https://www.npmjs.com/package/n) version management package to ensure compatibility with all the required packages of this project. In particular, the `node-sqlite3` package does not yet provide binaries ready for `Node.js (version 10.0)` (provided by the Arch Linux package repository). `n` allows for convenient access to the better-supported `Node.js (version 9.11.1)`.

### Security
Server hardening and other security considerations a extremely important when crafting a hosting environment.
Although this is an extensive topic, the basic considerations in this project were:
- Creating a non-root user account with restricted privileges and using sudo as a matter of course.
- Disabling remote log-in to the root account.
- Enforcing RSA-key authentication regime for SSH access.
- Disable and remove unnecessary daemons and services that listen actively on net ports.
- Configure iptables or other firewall tolerate only a narrow range of essential net traffic.
- Use fail2ban or another intrusion prevention system to neutralize attackers after repeated failed attempts at login.
- ALWAYS keep software up to date with the latest security patches.