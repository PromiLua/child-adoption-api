import { DashboardTransformer } from './Transformer/DashboardTransformer';
import { DashboardService } from './Services/DashboardService';
import { PeopleStorage } from '../People/Storage/PeopleStorage';
import { DashboardController } from './Actions/DashboardController';

const peopleStorage = new PeopleStorage();
const dashboardTransformer = new DashboardTransformer();

const dashboardService = new DashboardService(peopleStorage, dashboardTransformer);

export const dashboardController = new DashboardController(dashboardTransformer, dashboardService);
