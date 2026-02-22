import { api } from "../shared/api/axios";
import type { Drug } from "../shared/types";

export class DrugService {
  /**
   * Retrieves all drugs from the API.
   *
   * Sends a GET request to the `/drugs` endpoint and returns
   * the list of drugs received from the server.
   *
   * @returns A Promise that resolves to an array of Drug objects.
   * @throws Will throw an error if the request fails.
   */
  async getAll(): Promise<Drug[]> {
    const response = await api.get("/drugs");
    return response.data.data;
  }
}
