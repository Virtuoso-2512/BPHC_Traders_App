import { NavLink as Link } from "react-router-dom";

export default function Error() {
  return <div id="errorDiv">
    <h1 style={{fontFamily:"Roboto",letterSpacing:"1.5px",width:"35vw",fontSize:"3vw",textAlign:"center"}}>The page you're looking for can't be found!</h1>
    <Link to="/" className="btn-primary">Go to Home</Link>
  </div>
}