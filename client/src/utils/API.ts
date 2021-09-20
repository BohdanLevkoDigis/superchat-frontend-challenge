import { Octokit } from "@octokit/rest";
import axios from "axios";

const octokit = new Octokit();

const API_URL = "http://localhost:5000";

export type Owner = {
  id: string;
  avatar: string;
};

export type Repository = {
  name: string;
  owner: Owner;
  stars: number;
  topContributors: string[];
};

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
