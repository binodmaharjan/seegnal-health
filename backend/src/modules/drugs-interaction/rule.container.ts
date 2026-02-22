import { RuleRepository } from "./rule.repository";
import { RuleService } from "./rule.service";
import { RuleController } from "./rule.controller";

const ruleRepository = new RuleRepository();
const ruleService = new RuleService(ruleRepository);
const ruleController = new RuleController(ruleService);

export { ruleController };
