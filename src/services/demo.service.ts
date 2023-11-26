import { AppError } from '../error-handler';

const createDemoService = () => {
  let data = {
    name: 'Andres Botero',
    age: 42,
  };

  const getData = (): Promise<any> => {
    return new Promise((resolve) => resolve(data));
  };

  const setData = (input: any): Promise<void> => {
    if (!input.name) {
      throw new AppError('Missing property [name]', 400);
    }

    return new Promise((resolve) => {
      data = input;
      resolve();
    });
  };

  const errorTest = () => {
    throw new Error('This is general error');
  };

  return {
    getData,
    setData,
    errorTest,
  };
};

export const demoService = createDemoService();
