import "./Sectionsignin.css"
import { Link } from 'react-router-dom';

function Sectionsignin(){
    return (
        <>
    <div className="body">
    <div className="form">
        <h4>UserName</h4>
        <input type="text" name="username" placeholder="Enter Your UserName"/>
        <h4>Password</h4>
        <input type="text" name="password" placeholder="Enter Your Password"/>
        <Link to="/"><div className="submit">Submit</div></Link>
    </div>
        </div>
        </>
    )
}

export default Sectionsignin