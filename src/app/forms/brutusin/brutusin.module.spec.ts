import { BrutusinModule } from './brutusin.module';

describe('BrutusinModule', () => {
  let brutusinModule: BrutusinModule;

  beforeEach(() => {
    brutusinModule = new BrutusinModule();
  });

  it('should create an instance', () => {
    expect(brutusinModule).toBeTruthy();
  });
});
