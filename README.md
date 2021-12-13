# Punk IPA React App

This project was created entirely in React

## About

For this project we were asked to fetch data from Brewdog Catalogue using Punk API and display it in the form of cards

### User story

User can see a gallery of brewdog beers that are fetched from external API

#### User can 
- search beer by the name
- filter beer catalogue to display beers over 6% ABV
- filter beer catalogue to display only classic beers made before 10-2011
- fitler beer catalogue to display acidic beers ph < 4

#### My approach

To filter beers by ABV and whether it's classic I used pre-written parameters from PunkAPI and applied them to the URL


#### To fix

- Filtering by pH doesn't work
- I should not make that many fetch requests, only one and apply filters
- Improve overall design, add classes on click with state
- Add more filter parameters with state



