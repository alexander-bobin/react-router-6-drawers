import { useContext } from "react"
import { Link } from "react-router-dom"
import { DrawerPermanenceContext } from "./DrawerPermanenceContext"

function DrawerStatus () {
  const { areDrawersTemporary } = useContext(DrawerPermanenceContext)
  const colorClasses = areDrawersTemporary
    ? 'bg-slate-100 border-slate-400 text-slate-800'
    : 'bg-cyan-100 border-cyan-400 text-cyan-800'
  return (
    <div className={`border-4 p-3 rounded-lg ${colorClasses}`}>
      <p>
        Drawers are <strong>{areDrawersTemporary && 'NOT'} a new step</strong>.
        &nbsp;<Link to={`/.?areDrawersTemporary=${areDrawersTemporary ? '0' : '1'}`} className="text-cyan-600 hover:underline">Change</Link>
      </p>
    </div>
  )
}

export default DrawerStatus
