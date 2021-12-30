import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { ShowEvent } from "../components/pages/ShowEvent";
import { ShowUser } from "../components/pages/ShowUser";


export const HomeShow = [
  {
    path: "/",
    exact: true,
    Children: <Home/>
  },
  {
    path: "/show_event",
    exact: false,
    Children: <ShowEvent/>
  },
  {
    path: "/show_user",
    exact: true,
    Children: <ShowUser/>
  },
  {
    path: "*",
    exact: true,
    Children: <Page404/>
  },
]