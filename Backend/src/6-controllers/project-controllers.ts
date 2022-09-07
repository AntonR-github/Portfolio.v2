import express, { NextFunction, Request, Response } from "express";
import path from "path";
import ProjectModel from "../4-models/project-model";
import logic from "../5-logic/project-logic";

const router = express.Router();

router.get("/projects", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const projects = await logic.getAllProjects();
        response.json(projects);
        
    }
    catch (err: any) {
        next(err);
    }
});


router.get("/projects/:id([0-9]+)", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const id = +request.params.id;
        const project = await logic.getOneProject(id);
        response.json(project);
    }
    catch (err: any) {
        next(err);
    }
});

router.post("/projects", async (request: Request, response: Response, next: NextFunction) => {
    try {
        request.body.image = request.files?.image;
        const project = new ProjectModel(request.body);
        const newProject = await logic.addProject(project);
        response.status(201).json(newProject);    
    }
    catch (err: any) {
        next(err);
    }
});

router.delete("/projects/:id([0-9]+)", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const id = +request.params.id;
        const deletedProject = await logic.deleteProject(id);
        response.json(deletedProject);   
    }
    catch (err: any) {
        next(err);
    }
});


router.get("/projects/image/:imageName", async (request: Request, response: Response, next: NextFunction) => {
    try { 

        const imageName = request.params.imageName;
        const absolutePath = path.join(__dirname, "..", "1-assets", "images", imageName);
        response.sendFile(absolutePath);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;