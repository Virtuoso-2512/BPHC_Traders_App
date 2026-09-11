import { NavLink as Link} from "react-router-dom";
import "./Topbar.css";

function Topbar(){
    const opt = [
        {title:"Home", to:"/"},
        {title:"About Us", to:"/about-us"},
        {title:"Events", to:"/events"},
    ];

    return <div className="TopMain" id="navbar"
        style={{
            overflow: 'hidden',
            position: 'fixed',
            top: 0,
            transform:"all 0.5s ease",
            width: '100%',
            transition: 'height 0.4s',
            borderBottom: 'none',
        }}>
            <Link className="branding headerDiv" to="/" style={{display:"flex", flexDirection:"row", background:"transparent",textDecoration:"none",margin:"0 20px 0 0", width:"fit-content",alignItems:"center"}}>
            <img src={require("../assets/logo.jpg")} style={{width:"75px",margin:"0 1vw 0 0"}}/>
            <h3 style={{fontFamily:"Poppins"}}>Traders @ BPHC</h3>
            </Link>
            
            <div className="nav-links branding headerDiv">
                {opt.map((item, idx) => <>
                    {idx == 0 ? null : <p style={{margin:"0 .4vw"}}>|</p>}
                    <Link to={item.to} style={{textDecoration:"none",color:"var(--color)"}}><span key={idx} className="nav-item">{item.title}</span> </Link>
                </>)}
                <button onClick={()=>window.open("https://github.com/Virtuoso-2512/BPHC_Traders_App")} className="btn-primary hide-on-mobile">Link to GitHub Repo</button>
            </div>
        </div>;
}

export default Topbar;