import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

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
