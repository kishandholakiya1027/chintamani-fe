import { showToast } from '@/lib/utils'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const useCheckPermission = () => {
    const navigate = useNavigate()
    const { token, user } = useSelector((state: { auth: any }) => state?.auth)
    const checkPermission = (msg:string,path:boolean) => {
        if (user?.id) return { token, user }
        else {
            showToast(msg)
            path && navigate('/login')}
            return
        
    }

    return { checkPermission,token,user }
}

export default useCheckPermission