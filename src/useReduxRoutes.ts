import { History } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { Store } from "redux";
import { useNamedRoutes } from "./useNamedRoutes";
const createBrowserHistory = require('history/lib/createBrowserHistory');

/**
 * Configure react-router history to add react-router-redux(optional) and use-named-routes
 *
 * @param routes
 * @param store
 * @returns {ReactRouterReduxHistory}
 */
export function useReduxRoutes(routes, store: Store<any>): History {
  return syncHistoryWithStore(
    useNamedRoutes(routes),
    store
  );
}
