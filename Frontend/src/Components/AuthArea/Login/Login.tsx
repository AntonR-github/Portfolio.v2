import { useForm } from "react-hook-form";
import CredentialsModel from "../../../Models/CredentialsModel";
import AuthServices from "../../../Services/AuthServices";


function Login(): JSX.Element {


    const { register, handleSubmit } = useForm<CredentialsModel>();

    async function send(credentials: CredentialsModel) {
        try {
            await AuthServices.login(credentials);
            alert("You have been successfully logged-in.");

        }
        catch (err: any) {
            alert(err.message);
        }
    }

    return (
        <div className="Login">

            <form onSubmit={handleSubmit(send)}>

                <label>Username: </label>
                <input type="text" {...register("username")} />

                <label>Password: </label>
                <input type="password" {...register("password")} />

                <button className="btn btn-primary">Login</button>
                

            </form>



        </div>
    );
}

export default Login;
