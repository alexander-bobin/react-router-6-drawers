import { useLayoutEffect, useContext } from "react"
import { useLocation } from "react-router-dom"
import { DrawerPermanenceContext } from "../common/components/DrawerPermananceContext"

function HomePage () {
  const location = useLocation()
  const { setAreDrawersTemporary } = useContext(DrawerPermanenceContext)
  const searchParams = new URLSearchParams(location.search)
  const areDrawersTemporary = searchParams.get('areDrawersTemporary')
  useLayoutEffect(() => {
    if (areDrawersTemporary === '1') {
      setAreDrawersTemporary('1')
    } else if (areDrawersTemporary === '0') {
      setAreDrawersTemporary('0')
    }
  }, [areDrawersTemporary, setAreDrawersTemporary])
  return (
    <>
      <p>
        This application has two purposes:
      </p>
      <ul className="mt-4 list-disc">
        <li className="ml-4">Allow usage of drawers where they are permanent places and temporary places</li>
        <li className="ml-4">A code example for "routed drawers". Go to <a href="https://alexander-bobin.github.io/react-router-6-drawers-query-string/" className="text-blue-500 hover:underline">React Router 6 Query String Drawers</a> to see another approach.</li>
      </ul>
    </>
  )
}

export default HomePage
