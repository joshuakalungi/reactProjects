import logo from "../images/logo.png"

// eslint-disable-next-line react/prop-types
function User(){
    return(
        <div className="User">
            <div className="logo">
                <img src={ logo } alt="logo"/>
            </div>
            <div className="info">
                <p>ProspectForge</p>
                <p className="other">Technologies</p>
                <a href="#">Logout</a>
            </div>

        </div>
    )
}

export default User;