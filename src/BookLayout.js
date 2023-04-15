import { Link, Outlet } from "react-router-dom"

export function BookLayout() {
    return (
      <>
        <Link to="/book/1">Book jj1</Link>
        <br />
        <Link to="/book/2">Bookjk 2</Link>
        <br />
        <Link to="/book/new">New Book </Link>
        <Outlet context={{ hello: "World" }}/>
        </>
    )
}