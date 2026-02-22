import { Sequelize } from "sequelize";
import { Rule } from "../../models/Rule";

export class RuleRepository {
  /**
   * Accepts a patient's drug list, checks the Interactions table, and returns any alerts
   * @param drugIds Array of unique drugIds
   * @returns Array of matching Rule objects
   */

  async findRulesByDrugIds(drugIds: number[]): Promise<Rule[]> {
    const matchingRules = await Rule.findAll({
      where: Sequelize.literal(
        `combination <@ '${JSON.stringify(drugIds)}'::jsonb`,
      ),
    });
    return matchingRules;
  }
}
