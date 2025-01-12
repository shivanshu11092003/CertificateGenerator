import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

const Protected = ({ children }) => {
    const user = useSelector(state => state.user.User)
    let location = useLocation()
    console.log(location)
    if (user.role != "Admin") {
        return <Navigate to={"/dashboard"} state={{ from: location }} replace />
    }

    return children
}

export default Protected;