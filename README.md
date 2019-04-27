# Github Repositories List

## Idea of the App 
This application aims to display the repositories created in Github the last 30 days, it uses the standard Github Api to fetch the repositories data.

## Features
1) Display the total number of repositories created the last 30 days.
2) Display the following details for each row/repo :
  - Repository name
  - Repository description 
  - Number of stars for the repo. 
  - Number of issues for the repo.
  - Username and avatar of the owner.
3) Infinite scroll on repositories list.

## Libraries used
1) Bootstrap => used for the general styling of the application.
2) ngx-infinite-scroll => used for the infinite scroll feature, it is a simple and effective module constituted of a directive which triggers an event on each time you reach the bottom of the page. 

## How to run
To run the projet on the developement enviroment, first you can either Download the zip file of the project, or clone the repository (git clone https://github.com/dilalBoulaich/github-repositories.git)
then open a cmd window on the cloned repository and tap these commandes:

1) npm install (install the dependecies modules)
2) ng serve -o (build and run the angular application)


