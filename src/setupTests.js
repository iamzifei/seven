import "raf/polyfill";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-enzyme";

// Temporary hack to suppress error
// github.com/facebookincubator/create-react-app/issues/3199
window.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
  return 0;
};

configure({ adapter: new Adapter() });

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};

global.localStorage = localStorageMock;
