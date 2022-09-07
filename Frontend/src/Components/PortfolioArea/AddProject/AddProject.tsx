import { useForm } from "react-hook-form";
import ProjectModel from "../../../Models/ProjectModel";
import projectsServices from "../../../Services/ProjectsServices";
import config from "../../../Utils/Config";


function AddProject(): JSX.Element {


    const { register, handleSubmit } = useForm<ProjectModel>();


    async function send(project: ProjectModel) {
        try {
            await projectsServices.addProject(project);
            alert("Project added! ");

        }
        catch (err: any) {
            alert(err.message);
        }
    }
    return (
        

            <div className="addProject">
                <form onSubmit={handleSubmit(send)}>

                    <label>Description: </label>
                    <input type="text" {...register("description")} />

                    <label>Github: </label>
                    <input type="text" {...register("github")} />


                    <label>LiveDemo: </label>
                    <input type="text" {...register("liveDemo")} />

                    <label>Image: </label>
                    <input type="file" accept="image/*" {...register("image")} />
                    <img src={config.projectsImageUrl} alt="" />


                    <button className="btn btn-primary">Add Project</button>

                </form>
            </div>
       
    );
}

export default AddProject;
