import React, { useEffect, useState } from "react";
import { GitHub } from "@material-ui/icons";
import { Rating, Skeleton } from "@material-ui/lab";
import {
  ILinkPage,
  ISuccessResponse,
} from "../../Pages/LinkCreation/LinkCreation";
import { useStyles } from "./styles";
import { getGithubData, getRepoContributors } from "../../utils/API";
import { getRepoLink } from "../../services/repoLinkServices";

export const CardPage: React.FC = () => {
  const classes = useStyles();
  const [githubData, setGithubData] = useState<any>(null);
  const [cardData, setCardData] = useState<ILinkPage | null>(null);
  const [repoContributors, setRepoContributors] = useState<any>(null);
  const currentLocation = window.location.href.split("/")[3];

  useEffect(() => {
    const getData = async () => {
      try {
        const findBdData: ISuccessResponse | any = await getRepoLink(
          currentLocation
        );
        if (findBdData) {
          setCardData(findBdData);
          const fetchedGitData = await getGithubData(
            findBdData.userName,
            findBdData.repositoryName
          );
          const contriButorsData = await getRepoContributors(
            findBdData.userName,
            findBdData.repositoryName
          );
          setRepoContributors(
            contriButorsData
              .slice(0, 10)
              .map((contributor: any) => contributor.author.login)
          );
          setGithubData(fetchedGitData.data);
          console.log(repoContributors);
        }
      } catch (e) {}
    };
    getData();
  }, [currentLocation, repoContributors]);
  return (
    <div className={classes.card}>
      {cardData ? (
        <>
          <div
            style={{
              backgroundColor: cardData.color,
              height: "220px",
              padding: "10px 10px 20px",
              textAlign: "left",
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}
          >
            <div className={classes.cardTitle}>
              <GitHub className={classes.cardGitIcon} />
            </div>
            {!cardData.icon ? (
              <Skeleton
                variant="circle"
                className={classes.cardRepositoryIcon}
              />
            ) : (
              <img
                alt="hello"
                className={classes.cardRepositoryIcon}
                src={`http://localhost:5000${cardData.icon}`}
              />
            )}
            <div className={classes.cardRepositoryAuthor}>
              Author:
              <span className={classes.cardSubText}>
                {cardData.userName || githubData.owner.login}
              </span>
            </div>
          </div>
          <div className={classes.cardBody}>
            <div className={classes.cardRepository}>
              <div className={classes.cardRepositoryTitle}>
                Title:{" "}
                <span className={classes.cardSubText}>
                  {cardData.repositoryName || githubData.name}
                </span>
              </div>
              {githubData && (
                <>
                  <div className={classes.cardRepositoryDescription}>
                    Description:
                    <span className={classes.cardSubText}>
                      {githubData.description || "No description yet"}
                    </span>
                  </div>
                  <div className={classes.cardRepositoryStars}>
                    Stars:
                    <Rating
                      value={githubData.stargazers_count}
                      className={classes.cardRepositoryRating}
                    />
                  </div>
                  <ul className={classes.cardRepositoryContributors}>
                    Contributors
                    {repoContributors.map((contributor: string) => (
                      <li key={contributor}>{contributor}</li>
                    ))}
                  </ul>
                  <div className={classes.cardRepositoryStars}>
                    Star the repo
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
