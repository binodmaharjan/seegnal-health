import { Drug } from "../../models";
import { DrugRepository } from "./drug.repository";

export class DrugService {
  constructor(private drugRepo: DrugRepository) {}

  async getAllDrugs(): Promise<Drug[]> {
    return await this.drugRepo.findAll();
  }
}
