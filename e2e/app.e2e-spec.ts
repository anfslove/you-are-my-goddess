import { YouAreMyGoddessPage } from './app.po';

describe('you-are-my-goddess App', () => {
  let page: YouAreMyGoddessPage;

  beforeEach(() => {
    page = new YouAreMyGoddessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
