import { Drug } from "../../models";

export class DrugRepository {
  /**
   *
   * @returns Lists of drugs
   */
  async findAll(): Promise<Drug[]> {
    return await Drug.findAll();
  }
}
