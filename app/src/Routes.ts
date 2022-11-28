import express, { NextFunction, Request, Response } from 'express';
import { activatePeopleController, createPeopleController, deletePeopleController, getAllPeopleController, getPeopleController, inactivatePeopleController, updatePeopleController } from './People';
import { dashboardController } from './Dashboard';

const router = express.Router();

//Dashboard
router.get('/dashboard', (req: Request, res: Response, next: NextFunction) => {
  return dashboardController.handle(req, res, next);
});

//People
router.post('/people', (req: Request, res: Response, next: NextFunction) => {
  return createPeopleController.handle(req, res, next);
});

router.patch('/people/:uuid/activate', (req: Request, res: Response, next: NextFunction) => {
  return activatePeopleController.handle(req, res, next);
});

router.patch('/people/:uuid/inactivate', (req: Request, res: Response, next: NextFunction) => {
  return inactivatePeopleController.handle(req, res, next);
});

router.get('/people', (req: Request, res: Response, next: NextFunction) => {
  return getAllPeopleController.handle(req, res, next);
});

router.get('/people/:uuid', (req: Request, res: Response, next: NextFunction) => {
  return getPeopleController.handle(req, res, next);
});

router.put('/people/:uuid', (req: Request, res: Response, next: NextFunction) => {
  return updatePeopleController.handle(req, res, next);
});

router.delete('/people/:uuid', (req: Request, res: Response, next: NextFunction) => {
  return deletePeopleController.handle(req, res, next);
});

export { router };
