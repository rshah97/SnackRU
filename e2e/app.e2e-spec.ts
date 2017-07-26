import { SnackRUPage } from './app.po';

describe('snack-ru App', () => {
  let page: SnackRUPage;

  beforeEach(() => {
    page = new SnackRUPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
