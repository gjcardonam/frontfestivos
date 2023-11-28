import { Festivo } from './festivo';

describe('Festivo', () => {
  it('should create an instance', () => {
    const festivo = new Festivo('Nombre del festivo', new Date());
    expect(festivo).toBeTruthy();
  });
});