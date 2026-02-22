import { Request, Response } from "express";
import { DrugService } from "./drug.service";

export class DrugController {
  constructor(private drugService: DrugService) {}

  getAllDrugs = async (req: Request, res: Response) => {
    try {
      const result = await this.drugService.getAllDrugs();
      res.json({
        success: true,
        data: result,
      });
    } catch (error: any) {
      res.status(401).json({
        success: false,
        message: error.message,
      });
    }
  };
}
