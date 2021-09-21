import { Octokit } from "@octokit/rest";
import axios from "axios";

interface IAuthor {
  login: string;
}

export interface IContributor {
  author: IAuthor;
}

const octokit = new Octokit();

const API_URL = "http://localhost:5000";

export const API = axios.create({
  baseURL: `${API_URL}/api`,
  responseType: "json",
});

export const getGithubData = async (
  userName: string,
  repositoryName: string
) => {
  const githubData = await octokit.repos.get({
    owner: userName,
    repo: repositoryName,
  });

  return githubData;
};

export async function getRepoContributors(
  userName: string,
  repositoryName: string
): Promise<any> {
  try {
    const contributorsData = await octokit.repos.getContributorsStats({
      owner: userName,
      repo: repositoryName,
    });
    if (contributorsData.status === 200) {
      return contributorsData.data;
    }
  } catch (e) {
    return null;
  }
}
