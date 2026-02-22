import { api } from "../shared/api/axios";
import type { Interaction } from "../shared/types";

export class RuleService {
  /**
   * Analyzes drug interactions for the given drug IDs.
   *
   * Sends a POST request to the `/analyze` endpoint with a list
   * of drug IDs and returns detected interaction results.
   *
   * @param drugIds - Array of drug ids to analyze.
   * @returns A Promise that resolves to an array of Interaction objects.
   * @throws Will throw an error if the analysis request fails.
   */
  async analyze(drugIds: number[]): Promise<Interaction[]> {
    const response = await api.post("/analyze", { drugIds: drugIds });
    return response.data.data;
  }
}
