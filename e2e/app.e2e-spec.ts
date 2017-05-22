import { PokerManagerPage } from './app.po';

describe('poker-manager App', () => {
  let page: PokerManagerPage;

  beforeEach(() => {
    page = new PokerManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
