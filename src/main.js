import { createSiteMenuTemplate } from './view/site-menu.js';
import { createTripMainTemplate } from './view/trip-main.js';
import { createFilters } from './view/filters.js';
import { createEventsSortTemplate } from './view/events-sort.js';
import { createEventEditTemplate } from './view/event-edit.js';
import { createEventTemplate } from './view/event.js';
import { createEventsListTemplate } from './view/events-list.js';


const EVENTS_NUM = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector('.page-body');
const tripMainElement = siteMainElement.querySelector('.trip-main');
const siteMenuElement = siteMainElement.querySelector('.trip-controls__navigation');
const filtersElement = siteMainElement.querySelector('.trip-controls__filters');
const tripEventElement = siteMainElement.querySelector('.trip-events');


render(siteMenuElement, createSiteMenuTemplate(), 'beforeend');
render(tripMainElement, createTripMainTemplate(), 'afterbegin');
render(filtersElement, createFilters(), 'beforeend');
render(tripEventElement, createEventsSortTemplate(), 'beforeend');
render(tripEventElement, createEventsListTemplate(), 'beforeend');

const tripEventsList = siteMainElement.querySelector('.trip-events__list');

for (let i = 0; i < EVENTS_NUM; i++) {
  render(tripEventsList, createEventTemplate(), 'afterbegin');
}

render(tripEventsList, createEventEditTemplate(), 'beforeend');
