

// eslint-disable-next-line react/prop-types
function User(){
    return(
        <div className="User">
            <div className="logo">
                <img src="https://www.docplanner.com/img/sygnet.png" alt="logo"/>
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