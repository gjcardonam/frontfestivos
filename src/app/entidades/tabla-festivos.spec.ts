import { TablaFestivos } from './tabla-festivos';

describe('TablaFestivos', () => {
  it('should create an instance', () => {
    const festivo = 'Nombre del festivo';
    const fecha = new Date();

    const tablaFestivos = new TablaFestivos(festivo, fecha);
    expect(tablaFestivos).toBeTruthy();
  });
});
