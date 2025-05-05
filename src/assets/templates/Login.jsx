import axios from "axios";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";

function Login(){

    const{ register,handleSubmit,reset}=useForm();

        const navigate = useNavigate();

    function onLogin(data){

        console.log(data)
        alert("Logged in....!")

        axios.get(`http://localhost:9090/get_user/${data.username}/${data.password}`)
                                                                             .then((res) => {
                                                                                    console.log(res.data)
                                                                                    navigate('/dashboard')
                                                                     localStorage.setItem("user",JSON.stringify(res.data))
                                                                                        })
                                                                            .catch((error) => console.log(error.message))
                                                                                              
       
    }

    return(
        <div>
            <h2>Login</h2>

            <form onSubmit={handleSubmit(onLogin)}>

              <div>
                <label htmlFor="un">Enter UserName :</label>
                <input type="text" id="un" placeholder="Enter UserName" {...register("username")}/>
              </div>

              <div>
                <label htmlFor="pass">Enter Password :</label>
                <input type="text" id="pass" placeholder="Enter Password" {...register("password")}></input>
              </div>
              
                    <button type="submit">LOGIN</button>
            </form>

        </div>
    )
}
export default Login