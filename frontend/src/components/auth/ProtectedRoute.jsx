import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'


const ProtectedRoute = () => {
    const isLogged = useSelector(state=>state.auth.isLogged)
    const is_admin = useSelector(state=>state.auth.is_admin)
return (
    isLogged ?is_admin?<Navigate to='/admin'/>:<Outlet/> :<Navigate to='/login'/>
  )
}

export default ProtectedRoute