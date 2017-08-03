import { AnuglarDevelopPage } from './app.po';

describe('anuglar-develop App', () => {
  let page: AnuglarDevelopPage;

  beforeEach(() => {
    page = new AnuglarDevelopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
