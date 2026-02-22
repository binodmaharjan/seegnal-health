import { DrugRepository } from "./drug.repository";
import { DrugService } from "./drug.service";
import { DrugController } from "./drug.controller";

const drugRepository = new DrugRepository();
const drugService = new DrugService(drugRepository);
const drugController = new DrugController(drugService);

export { drugController };
