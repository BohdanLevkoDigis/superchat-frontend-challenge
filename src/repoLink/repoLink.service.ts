import { NotFoundException } from "../utils/exceptions";
import RepoLink from "../models/RepoLink";
import { IRepoLink } from "../models/RepoLink";

export class RepoLinkService {
  async createLink(
    userName: string,
    repositoryName: string,
    color: string,
    icon: string,
    link: string
  ): Promise<IRepoLink> {
    const repoLink = new RepoLink({
      userName,
      repositoryName,
      color,
      icon,
      link,
    });
    return repoLink.save();
  }

  async getRepoLinkById(repoLinkId: string): Promise<IRepoLink> {
    const repoLink = await RepoLink.findById(repoLinkId);

    if (!repoLink) {
      throw new NotFoundException("Link with provided ID was not found");
    }

    return repoLink;
  }
}
