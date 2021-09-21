import { BadRequestException } from "../utils/exceptions/bad-request.exception";
import { Request } from "express";
import { validationResult } from "express-validator";
import { RepoLinkService as RepositoryLinkService } from "./repoLink.service";
import { IRepoLink } from "../models/RepoLink";

export interface ICreateBody {
  userName: string;
  repositoryName: string;
  color: string;
}

export interface IRepositoryIconImage {
  filename: string;
}
const repositoryLinkService = new RepositoryLinkService();
export class RepoLinkController {
  async createLink(req: Request<any, any, ICreateBody>): Promise<IRepoLink> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new BadRequestException(
        "Invalid product creating data",
        errors.array()
      );
    }
    const { userName, repositoryName, color } = req.body;
    const icon = (req.files as Express.Multer.File[]).map(
      (file: IRepositoryIconImage) => `/uploads/repoIcons/${file.filename}`
    );
    return repositoryLinkService.createLink(
      userName,
      repositoryName,
      color,
      icon[0]
    );
  }

  getLink(req: Request): Promise<IRepoLink> {
    const repoLinkId = req.params.id;

    return repositoryLinkService.getRepoLinkById(repoLinkId);
  }
}
