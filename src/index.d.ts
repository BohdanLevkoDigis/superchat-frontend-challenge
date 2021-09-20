declare namespace Express {
  export interface Request {
    repoLink?: {
      userName: string;
      repositoryNake: string;
      color: string;
      link: string;
    };
  }
}
