import apiClient from "./apiClient";

export async function GetComponents() {
  const response = await apiClient.get("/components");
  return response.data;
}

export async function GetDashboardByID(id) {
  const response = await apiClient.get(`/dashboard/${id}`);
  if (response.status!=200){
    console.error(response.data)
    return {}
  }
  return response.data;
}
