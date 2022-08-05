import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationRoutes = Router();

const specificationsRepository = new SpecificationRepository();

specificationRoutes.post("/", (req, res) => {
    const { name, description } = req.body;
    const createSpecificationService = new CreateSpecificationService(
        specificationsRepository
    );

    createSpecificationService.execute({
        name,
        description,
    });
    return res.status(200).send();
});

export { specificationRoutes };
