import { SocketExamplePage } from './app.po';

describe('socket-example App', () => {
  let page: SocketExamplePage;

  beforeEach(() => {
    page = new SocketExamplePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
