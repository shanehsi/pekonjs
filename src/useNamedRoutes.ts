import { useRouterHistory } from "react-router";
import { History } from "history";
const createBrowserHistory = require('history/lib/createBrowserHistory');
const useNamedRoutesX = require('use-named-routes');

/**
 * Configure react-router history to add react-router-redux(optional) and use-named-routes
 *
 * @param routes
 * @returns {any}
 */
export function useNamedRoutes(routes): History {
  return useNamedRoutesX(useRouterHistory(createBrowserHistory))({ routes });
}
