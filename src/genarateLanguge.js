import { compile, pathToRegexp } from "path-to-regexp";

export const genarateLanguge = (locale, location) => {
    console.log("pathname", location.pathname)
    const ROUTE = "/:locale/:path*";
    const definePath = compile(ROUTE);
    const routeComponents = pathToRegexp(ROUTE).exec(location.pathname);
    console.log(routeComponents);
    let subPaths = null;
    if (routeComponents && routeComponents[2]) {
      subPaths = routeComponents[2].split("/");
    }
  
    return definePath({
      locale,
      path: subPaths
    });
}