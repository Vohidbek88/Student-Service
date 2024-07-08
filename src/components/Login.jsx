import axios from "../api/index";
import { useContext, useState} from "react"
import { ServicesContext } from "../context";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [sendStatus,setSendStatus]=useState(false);
    const [msgError,setMsgerror]=useState('');
    const {setUser,userData}=useContext(ServicesContext);
    const navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        setSendStatus(true)

        try {
            setSendStatus(false)
            const response=await axios.post('/user/login/',{
                username,password
            })
            console.log(response.data);
            localStorage.setItem('token',response?.data.token)
            localStorage.setItem('user_id',response?.data.user_id)
            navigate('/')
            window.location.reload()
        } catch (error) {
            console.log(error);
            setMsgerror('Parol yoki Login xato!')
            setSendStatus(false)
        }
        

    }
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={e=>setUsername(e.target.value)} name="username" required={true} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password"  onChange={e=>setPassword(e.target.value)} name="password" required={true} />
                <p style={{color:'red',marginBottom:'15px'}}>{msgError!='' && msgError}</p>
                <button type="submit" disabled={sendStatus}>{
                    sendStatus ? 'Loading...':'Login'
                }</button>
            </form>
        </div>

    )
}

export default Login