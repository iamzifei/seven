import { mount, shallow } from "enzyme";
import PropTypes from "prop-types";

/**
 * For `mount()` full DOM rendering in enzyme.
 * Provides needed context for mui to be rendered properly
 */
export const mountWithContext = node =>
  mount(node, {
    context: { location: { pathname: "/" } },
    childContextTypes: {
      dispatch: PropTypes.func,
      location: PropTypes.object
    }
  });

/**
 * For `shallow()` shallow rendering in enzyme (component only as a unit).
 * Provides needed context for mui to be rendered properly
 * during testing.
 *
 */
export const shallowWithContext = (node, context = {}) =>
  shallow(node, {
    context: { ...context },
    childContextTypes: { dispatch: PropTypes.func }
  });

export const shallowWithState = (Component, state) => {
  const context = {
    store: {
      getState: () => state,
      subscribe: () => ({}),
      dispatch: () => ({})
    }
  };
  return shallow(Component, { context });
};
