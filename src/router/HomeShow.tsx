import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { ShowEvent } from "../components/pages/ShowEvent";
import { ShowUser } from "../components/pages/ShowUser";


export const HomeShow = [
  {
    path: "/",
    exact: true,
    children: <Home/>
  },
  {
    path: "/show_event",
    exact: false,
    children: <ShowEvent/>
  },
  {
    path: "/show_user",
    exact: true,
    children: <ShowUser/>
  },
  {
    path: "*",
    exact: true,
    children: <Page404/>
  },
]