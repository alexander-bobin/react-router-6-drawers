import { useContext } from "react"
import { Link } from "react-router-dom"
import { DrawerPermanenceContext } from "./DrawerPermananceContext"

function DrawerStatus () {
  const { areDrawersTemporary } = useContext(DrawerPermanenceContext)
  return (
    <div className="bg-cyan-100 border-cyan-400 border-4 p-3 text-cyan-800 rounded-lg">
      <p>
        Drawers are <strong>{areDrawersTemporary ? 'temporary' : 'permanent'}</strong>.
        &nbsp;<Link to={`/.?areDrawersTemporary=${areDrawersTemporary ? '0' : '1'}`} className="text-cyan-600 hover:underline">Change</Link>
      </p>
    </div>
  )
}

export default DrawerStatus
