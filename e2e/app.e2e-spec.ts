import { Ships2017Page } from './app.po';

describe('ships2017 App', () => {
  let page: Ships2017Page;

  beforeEach(() => {
    page = new Ships2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
