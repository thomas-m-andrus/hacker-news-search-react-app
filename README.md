# Relivant Commands

This repo was initialized using Nx and levrages React and redux. The final app allows a user to:
- search the Hacker news site using their public api
- display search results and links to those results
- retains a history of search results as long as the page isn't reloaded
## Storybook

- nx run ui:storybook
  - this will run the basic ui library in storybook
- nx run pages:storybook
  - this will run the conglomeration of the pages library

## Unit Testing

- nx run ui:test
  - it uses the jest test runner

## Run app

- nx run react-hacker-news-app:serve
  - the react app uses redux and react-router