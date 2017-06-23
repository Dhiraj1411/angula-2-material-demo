import { AngMatDemoPage } from './app.po';

describe('ang-mat-demo App', function() {
  let page: AngMatDemoPage;

  beforeEach(() => {
    page = new AngMatDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
