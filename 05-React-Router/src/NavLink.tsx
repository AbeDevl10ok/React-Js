import { NavLink as NavLinkReactRouter } from "react-router-dom";

export function NavLink ({to,children,...props}){
    return (
        <NavLinkReactRouter {...props} className={({isActive})=>isActive?'is-active':undefined}
        to={to}
        >
            {children}
        </NavLinkReactRouter>
    )
}