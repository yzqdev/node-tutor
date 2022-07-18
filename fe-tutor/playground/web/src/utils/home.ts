import http from "./http";
export const removeDataApi = (id: string) => {
  return http.post(`/home/removeData/${id}`);
};
export const homeAddApi = (req: any) => {
  return http.post(`/home/add`, req);
};
export const getCodeListApi = () => {
  return http.get(`/home/codeList`);
};
