import { Rule } from "../../models/Rule";
import { RuleRepository } from "./rule.repository";

export class RuleService {
  constructor(private ruleRepo: RuleRepository) {}

  /**
   *
   * @param drugIds arrays of drugs IDS
   * @returns Array of matching Rule objects
   */
  async analyseRules(drugIds: number[]): Promise<Rule[]> {
    return await this.ruleRepo.findRulesByDrugIds(drugIds);
  }
}
