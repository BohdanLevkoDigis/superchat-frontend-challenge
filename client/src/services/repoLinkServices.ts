import { API } from "../utils/API";

export interface IRepoLink {
  _id: string;
  repositoryName: string;
  userName: string;
  color: string;
  icon: string;
}

export interface IRepoLinkResponse extends IRepoLink {
  data: IRepoLink;
}


export const sendRepoLinkAddForm = async (
  data: FormData
): Promise<IRepoLinkResponse> => {
  const response = await API.post<IRepoLinkResponse>("/repoLink", data, {
    headers: {
      "Content-Type": "blobData",
    },
  });
  return response.data;
};

export const getRepoLink = async (id: string): Promise<IRepoLinkResponse> => {
  const response = await API.get<IRepoLinkResponse>(`/repoLink/${id}`);
  return response.data;
};
