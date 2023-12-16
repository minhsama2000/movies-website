export class Logger {
  static INFO = (...title: Object[]) => {
    console.log(title[0], title[1]);
  };

  static ERROR = (...title: Object[]) => {
    console.error(title[0], title[1]);
  };

  static WARN = (...title: Object[]) => {
    console.warn(title[0], title[1]);
  };
}
