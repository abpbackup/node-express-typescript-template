import express, { NextFunction, Request, Response } from 'express';
import { demoService } from './services/demo.service';

export const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    // For query params /?x=1&y=2, use
    const queryParams = req.query;

    res.json({
      message: 'ok',
      queryParams,
    });
  } catch (error) {
    next(error);
  }
});

router.get('/data', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await demoService.getData();

    res.json({
      message: 'ok',
      data,
    });
  } catch (error) {
    next(error);
  }
});

router.get('/:param1/:param2', (req: Request, res: Response, next: NextFunction) => {
  try {
    // For url params, use
    const params = req.params;

    res.json({
      message: 'ok',
      params,
    });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    // This data is already parsed to JSON
    const data = req.body;

    await demoService.setData(data);

    res.json({
      message: 'ok',
    });
  } catch (error) {
    next(error);
  }
});

router.post('/error-test', async (req: Request, res: Response, next: NextFunction) => {
  try {
    demoService.errorTest();

    res.json({
      message: 'ok',
    });
  } catch (error) {
    next(error);
  }
});
