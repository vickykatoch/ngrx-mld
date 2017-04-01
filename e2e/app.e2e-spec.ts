import { NgrxMldPage } from './app.po';

describe('ngrx-mld App', () => {
  let page: NgrxMldPage;

  beforeEach(() => {
    page = new NgrxMldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
