import "./Portfolio.css";
import { useEffect, useState } from 'react';
import ProjectModel from "../../../Models/ProjectModel";
import projectsServices from './../../../Services/ProjectsServices';
import config from "../../../Utils/Config";
import UserModel from "../../../Models/UserModel";
import store from "../../../Redux/Store";




function Portfolio(): JSX.Element {

  const [user, setUser] = useState<UserModel>();
  const [projects, setProjects] = useState<ProjectModel[]>([]);

  useEffect(() => {

    setUser(store.getState().authState.user);
    const unsubscribe = store.subscribe(() => {
      setUser(store.getState().authState.user);
    });
    return () => unsubscribe();

  }, []);




  useEffect(() => {
    
    projectsServices.getAllProjects()
      .then(projects => setProjects(projects))
      .catch(err => alert(err.message))

      const unsubscribe = store.subscribe(()=>{
        setProjects(store.getState().projectsState.projects);
      }
      )
      return () => unsubscribe();
        
  }, []);


  function deleteProject(id: number) {
    projectsServices.deleteProject(id)
      .then(() => {
        const newProjects = projects.filter(p => p.projectId === id);
        setProjects(newProjects);
      })
      .catch(err => alert(err.message));
  }




  return (
    <section className="Portfolio" id="portfolio">
      <h2>My Works</h2>
      <div className="container portfolio__container">
        {projects.map(p =>
          <article className="portfolio__item" key={p.projectId}>
            <div className="portfolio__item-image">
              <img src={config.projectsImageUrl + p.imageName} alt="" />
            </div>
            <h3>{p.description}</h3>
            <div className="portfolio__item-cta">
              <a href={p.github} className="btn" target="_blank" rel="noopener noreferrer">Github</a>
              <a href={p.liveDemo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
            {user && <button className="btn btn-primary" onClick={() => deleteProject(p.projectId)}>Delete</button>}
          </article>
        )}
      </div>
    </section>
  );
}

export default Portfolio;
