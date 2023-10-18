import { Link } from './Layout.styled'


export const AuthNav = () => {
    return (
        <nav>
            <Link to='/register'>Register</Link>
           <Link to='/login'>Login</Link> 
        </nav>
    )
}