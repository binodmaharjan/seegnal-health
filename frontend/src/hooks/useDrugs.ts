import { useEffect, useState } from "react";
import { DrugService } from "../services/drug.service";
import type { Drug } from "../shared/types";

const drugService = new DrugService();

export function useDrugs() {
  const [drugs, setDrugs] = useState<Drug[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchDrugs = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await drugService.getAll();

        if (isMounted) {
          setDrugs(data);
        }
      } catch (error) {
        if (isMounted) {
          setError("Failed to load medications");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchDrugs();

    return () => {
      isMounted = false;
    };
  }, []);

  return { drugs, loading, error };
}
