import apiClient from "./apiClient";

export async function GetComponents() {
  const response = await apiClient.get("/components");
  return response.data;
}

export async function CreateDashboard(dashboard) {
  const response = await apiClient.post("/dashboard", dashboard);
  return response.data;
}

export async function GetDashboards() {
  const response = await apiClient.get("/dashboard");
  return response.data;
}
