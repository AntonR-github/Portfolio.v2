import { useForm } from "react-hook-form";
import UserModel from "../../../Models/UserModel";
import authService from "../../../Services/AuthServices";


function Register(): JSX.Element {

    const { register, handleSubmit } = useForm<UserModel>();

    async function send(user: UserModel) {
        try {
            await authService.register(user);
            alert("You have been successfully registered.");

        }
        catch (err: any) {
            alert(err.message);
        }
    }


    return (
        <div className="Register">
            <form onSubmit={handleSubmit(send)}>

                <label>Username: </label>
                <input type="text" {...register("username")} />

                <label>Password: </label>
                <input type="password" {...register("password")} />

                <button className="btn btn-primary">Register</button>

            </form>
        </div>
    );
}

export default Register;
