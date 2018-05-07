
#### JavaScript Frameworks
- [Node.js](#node.js)
- [Express.js](#express.js)
- [React.js](#react.js)

#### Web Scraping
- [Selenium](#selenium)
- [Yahoo Finance](#YahooFinance)

#### Database
- [SQLite](#sqlite)
- [SQLite-jdbc](#sqlite-jdbc)
- [node-sqlite3](#node-sqlite3)

#### Hosting Environment
- [Linode](#Linode)
- [Arch Linux](#ArchLinux)

#
### JavaScript Frameworks
#### [Node.js](nodejs.org)
`Node.JS` is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code server-side. I elected to build a project around the Node.js framework because it is a highly versatile open-source framework that is wildly popular and one of the most in-demand technologies in IT today. 

#### [Express.js](reactjs.org)
`Express.js` is a minimalist Node.js framework for web applications. It is used here for serving JSON objects at the API endpoints.

#### [React.js](reactjs.org)
`React.js` is a JavaScript library developed for creating responsive user interfaces.
React makes use of compositable components to allow for painless development of robust web applications that are highly responsive and configurable.

#
### Web Scraping
#### [Selenium](seleniumhq.org)
`Selenium` is a web browser automation framework that makes it possible to interact with dynamic websites in a programmatic manner.
This project uses [a webScaper](github.com/fossnik/SeleniumScraper) I created in Java to scrape the dynamic contents of a table from the [yahoo finance](finance.yahoo.com/cryptocurrencies)
The generation of my SQLite database is performed by a Java Selenium webdriver.

#### YahooFinance
[Yahoo! Finance](finance.yahoo.com) is a free web service and portfolio management resource that I chose as the source of my selenium web scraping data. It is public and reliable, although their implementation has tended to mutate on occasion.
The particular endpoint I utilize is (https://finance.yahoo.com/cryptocurrencies)

#
### Database
#### [SQLite](sqlite.org)
`SQLite` is a relational database management system in the style of SQL.

#### [SQLite-jdbc](http://www.sqlitetutorial.net/sqlite-java/sqlite-jdbc-driver)
This project utilizes the SQLite driver for the Java Database Connector (JDBC) to append records from my scraper to a durable database.

#### [node-sqlite3](http://www.sqlitetutorial.net/sqlite-nodejs)
I used the [SQLite3 Node.js module](https://github.com/mapbox/node-sqlite3) to perform SQL queries in order to retrieve data from my SQLite database for display.

#
### Hosting Environment
#### [Linode](linode.com)
Two node.js projects are hosted in a Linode container.
This includes the Express.js project serving up API endpoints, and a React.js package to represent the queried data.
I chose the least expensive service tier (1024MB RAM 4096GB HDD 1TB Data Cap).

#### [ArchLinux](archlinux.org)
I elected to use ArchLinux for my Linode container because it is a very minimalist and efficient distro that I am already very familiar with.
It is because ArchLinux is so bleeding-edge new that I resorted to using the [npm n](https://www.npmjs.com/package/n) version management to work with an older version of `Node.js` (version 9.11.1) than is provided by the Arch Linux package repository.