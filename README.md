Welcome to the React front-end interface for my Selenium Webscraper.

## Table of Contents
Applied Technologies
- [React](#react)
- [Node.js](#node.js)
- [Selenium](#selenium)
- [SQLite](#sqlite)

Data Source
- [Yahoo! Finance](#Yahoo Finance)

## React
`React` is a JavaScript library developed for creating responsive user interfaces.
React makes use of compositable components to allow for painless development of robust web applications that are highly responsive and configurable.

## Node.js
`Node.JS` is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code server-side. I elected to build a project around the Node.js framework because it is a highly versatile open-source framework that is wildly popular and one of the most in-demand technologies in IT today. 

## Selenium
`Selenium` is a web browser automation framework that makes it possible to interact with dynamic websites in a programmatic manner.
I made use of selenium in this project to scrape the dynamic contents of a table from the [yahoo finance](http://finance.yahoo.com/cryptocurrencies) 

## SQLite
`SQLite` is a relational database management system in the style of SQL. This project utilizes an SQLite database which is populated by my [selenium webscraper](https://github.com/fossnik/SeleniumScraper)


# Yahoo Finance
[Yahoo! Finance](finance.yahoo.com) is a free web service and portfolio management resource that I chose as the source of my selenium web scraping data. It is public and reliable, although their implementation has tended to mutate on occasion.
The particular endpoint I utilize is (https://finance.yahoo.com/cryptocurrencies)