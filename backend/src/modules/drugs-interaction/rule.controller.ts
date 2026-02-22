import { Request, Response } from "express";
import { RuleService } from "./rule.service";

export class RuleController {
  constructor(private ruleService: RuleService) {}

  /**
   * Controller method to analyse drug interaction rules
   *
   */

  analyse = async (req: Request, res: Response) => {
    // Extract drugIds array from request body
    const { drugIds } = req.body;
    try {
      const result = await this.ruleService.analyseRules(drugIds);
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
