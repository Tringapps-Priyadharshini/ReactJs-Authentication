import {useNavigate} from "react-router-dom";
import { useAuth } from "./auth";
import './home.css';
export default function Home() {
  const auth = useAuth();
  const navigate = useNavigate();
  function logout(){
    auth.signout();
    navigate("/")
  }
    return (auth.user && <div className="name_logout"><h3>welcome {auth.user} <br/><br/> Visit WONDERS Images</h3>
    <button onClick={logout}>logout</button>
    </div>);
  }