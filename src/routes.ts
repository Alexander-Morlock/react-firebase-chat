import Chat from "./components/Chat"
import LoginForm from "./components/LoginForm"

const LOGIN_ROUTE = "/login"
const CHAT_ROUTE = "/chat"

export type RouteType = {
  path: string
  Component: () => JSX.Element
}

export const publicRoutes: RouteType[] = [
  {
    path: LOGIN_ROUTE,
    Component: LoginForm,
  },
]

export const privateRoutes: RouteType[] = [
  {
    path: CHAT_ROUTE,
    Component: Chat,
  },
]
