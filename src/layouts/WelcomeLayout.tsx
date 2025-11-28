import { Outlet } from "react-router-dom"

export const Welcome: React.FC = () => {
  return (
    <div>welcom<Outlet></Outlet> </div>
  )
}