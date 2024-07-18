# GraphQL Book Search Engine

## Description

RESTful APIs are a great way to structure database requests, but if you're going to have a lot of data points, something like GraphQL might be a better option! This application started out using RESTful API requests for creating accounts and managing the user's saved books from the search engine, but the task at hand was to refactor this to use GraphQL to handle this.

This application is designed to let users search for any book that's listed under Google's Book Search API, and allows them to save any of the results to an accessible list of "saved books". Users can easily view and manage their list of saved books on a different page within the site. The goal of this application is to help anyone who would like an easy way to manage of list of books they've read or books they would like to read.

This refactor job was a great way to get familiar with using GraphQL hosted within an Apollo Server; it's always a little tricky when you have to "untangle" someone else's code and change the core structure of how it's connecting to/updating a database, but it's a great way to sharpen your skills!

## Installation

N/A, visit the site [here!](https://book-search-engine-graphql-esp9.onrender.com)

## Usage

To use the application, visit the site [here!](https://book-search-engine-graphql-esp9.onrender.com)

Users don't need to be logged in to use the search engine feature. Simply search for any book title to access the search engine, and a list of results will populate in the main body of the site.

Users will need to make an account in order to save books to / manage a list of saved books. Click the "sign up" button located in the navigation bar on the top right-hand side of the screen.

The search engine functions the same way for users that are logged in, however, upon performing a search for books, each result will have a button to save that book to their saved books list.

To view your own saved books list, select the "view saved books" button in the navigation bar at the top of the page. Here you can view your saved books, or remove certain books from the list.

## Credits

Application refactored by me, James Probel, provided with starter code from the Programming Boot Camp of UNC Chapel Hill
