import { API } from "../utils/API";

export interface IRepoLink {
  _id: string;
  repositoryName: string;
  userName: string;
  color: string;
  icon: string;
}

export interface IRepoLinkAddResponse {
  message: string;
}

export const sendRepoLinkAddForm = async (
  data: FormData
): Promise<IRepoLinkAddResponse> => {
  const response = await API.post<IRepoLinkAddResponse>("/repoLink", data, {
    headers: {
      "Content-Type": "blobData",
    },
  });
  return response.data;
};

