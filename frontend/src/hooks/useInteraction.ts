import { useState } from "react";
import axios from "axios";
import { RuleService } from "../services/rules.service";
import type { Interaction } from "../shared/types";

const ruleService = new RuleService();

export const useInteraction = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Record<string, string> | null>(null);
  const [data, setData] = useState<Interaction[] | null>(null);

  const analyze = async (drugIds: number[]) => {
    console.log("Analyzing interactions for drug IDs:", drugIds);
    setLoading(true);
    setError(null);

    try {
      const response = await ruleService.analyze(drugIds);
      setData(response);
      return response;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error || err.message);
      } else if (err instanceof Error) {
        setError({ message: err.message });
      } else {
        setError({ message: "An unknown error occurred" });
      }
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { analyze, data, loading, error };
};
