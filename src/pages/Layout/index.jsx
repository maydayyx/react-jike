import {$f} from '@/utils/index.js'
import {useEffect} from "react";
const Layout = () => {
    useEffect(() => {
        $f.get('/user/profile')
    }, []);
    return (
        <div>
            this is layout
        </div>
    )
}

export default Layout