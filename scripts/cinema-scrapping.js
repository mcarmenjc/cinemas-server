"use strict";

let OdeonScheduleController = require('./controllers/odeon-schedule-controller.js');

let scheduleController = new OdeonScheduleController('bfi bfi_imax', 'http://www.odeon.co.uk/cinemas/bfi_imax/211/');
scheduleController.getSchedule();