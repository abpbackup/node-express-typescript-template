import express, { Request, Response } from 'express';

export const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  // For query params /?x=1&y=2, use
  const queryParams = req.query;

  res.json({
    message: 'ok',
    code: 200,
    queryParams,
  });
});

router.get('/:param1/:param2', (req: Request, res: Response) => {
  // For url encoded params, use
  const params = req.params;

  res.json({
    message: 'ok',
    code: 200,
    params,
  });
});

router.post('/', (req: Request, res: Response) => {
  // For JSON/URLENCODED data in the body
  const bodyData = req.body;

  // For query params /?x=1&y=2, use
  const queryParams = req.query;

  res.json({
    message: 'ok',
    code: 200,
    bodyData,
    queryParams,
  });
});
