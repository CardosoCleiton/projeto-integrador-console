import axios from "axios";
import { apiConfig } from "../config/variables";

export const api = axios.create({
  baseURL: apiConfig.baseUrl
});