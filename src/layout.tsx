import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { useLenis } from "lenis/react"
import AppHeader from "./components/layout/app.header"
import AppFooter from "./components/layout/app.footer"

function Layout() {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return (
    <div>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </div>
  )
}

export default Layout