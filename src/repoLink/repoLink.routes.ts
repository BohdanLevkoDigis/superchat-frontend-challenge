import { Router } from "express";
import { check } from "express-validator";
import { requestWrapper } from "../utils/request-wrapper";
import { RepoLinkController } from "./repoLink.controller";
import { StatusCodes } from "../utils/status-codes";
import multer from "multer";
import fs from "fs";
import path from "path";
import { hashFileName } from "../utils/helpers";

const router = Router();

const repoLinkController = new RepoLinkController();

const storage = multer.diskStorage({
  destination: (req, file: Express.Multer.File, callback: any) => {
    const dir = path.resolve(__dirname, "../../uploads/repoIcons")

    if (!fs.existsSync(dir)) {
      return fs.mkdir(dir, { recursive: true }, (err) => callback(err, dir))
    }
    
    callback(null, dir)
  },
  filename: (req, file: Express.Multer.File, callback: any) => {
    callback(null, hashFileName(file.originalname));
  },
});

const upload = multer({ storage: storage });
router.post(
  "/",
  upload.array("icon[]", 1),
  [
    check("userName", "Enter valid user name").isLength({
      min: 3,
    }),
    check("repositoryName", "Enter valid user name").isLength({
      min: 3,
    }),
  ],
  requestWrapper(repoLinkController.createLink, StatusCodes.CREATED)
);

router.get("/:id", requestWrapper(repoLinkController.getLink));
module.exports = router;
