import React, { useEffect, useState } from "react";
import {
  Description,
  ExpandLess,
  ExpandMore,
  GitHub,
  Grade,
  People,
  Person,
  ThumbsUpDown,
  Title,
} from "@material-ui/icons";
import { Rating, Skeleton } from "@material-ui/lab";
import { useStyles } from "./styles";
import { getGithubData, getRepoContributors } from "../../utils/API";
import {
  getRepoLink,
  IRepoLink,
} from "../../services/repoLinkServices";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import travolta from "../../assets/images/travolta.gif";

interface Author {
  login: string;
}

interface Contributor {
  author: Author;
}

export const CardPage: React.FC = () => {
  const classes = useStyles();
  const [githubData, setGithubData] = useState<any>(null);
  const [cardData, setCardData] = useState<IRepoLink | null>(null);
  const [repoContributors, setRepoContributors] = useState<string[] | []>([]);
  const [listOpen, setListOpen] = useState(true);
  const currentLocation = window.location.href.split("/")[3];

  const handleClick = () => {
    setListOpen(!listOpen);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const findBdData: IRepoLink | any = await getRepoLink(currentLocation);
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
              .map((contributor: Contributor) => contributor.author.login)
          );
          setGithubData(fetchedGitData.data);
        }
      } catch (e) {}
    };
    getData();
  }, [currentLocation, repoContributors]);
  return (
    <div className={classes.card}>
      {cardData && (
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
              <span className={classes.cardTitleText}>
                {cardData.userName || githubData.owner.login}
              </span>
            </div>
          </div>
          <div className={classes.cardBody}>
            <div className={classes.cardRepository}>
              <div className={classes.cardRepositoryItem}>
                <Title className={classes.cardRepositoryItemIcon} />
                Title:
                <span className={classes.cardSubText}>
                  {cardData.repositoryName || githubData.name}
                </span>
              </div>
              {githubData ? (
                <>
                  <div className={classes.cardRepositoryItem}>
                    <Description className={classes.cardRepositoryItemIcon} />
                    Description:
                    <span className={classes.cardSubText}>
                      {githubData.description || "No description yet"}
                    </span>
                  </div>
                  <div className={classes.cardRepositoryStars}>
                    <Grade className={classes.cardRepositoryItemIcon} />
                    Stars:
                    <Rating
                      value={githubData.stargazers_count}
                      className={classes.cardRepositoryRating}
                      disabled
                    />
                  </div>
                  <List>
                    <ListItem
                      className={classes.cardRepositoryList}
                      onClick={handleClick}
                      button
                    >
                      <People className={classes.cardRepositoryItemIcon} />
                      Contributors
                      {listOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={listOpen} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {repoContributors.map((contributor: string) => (
                          <ListItem button>
                            <ListItemIcon>
                              <Person style={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText primary={contributor} />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </List>

                  <div className={classes.cardRepositoryStars}>
                    <ThumbsUpDown className={classes.cardRepositoryItemIcon} />
                    Rate the repo
                    <Rating
                      value={githubData.stargazers_count}
                      className={classes.cardRepositoryRating}
                    />
                  </div>
                </>
              ) : (
                <div className={classes.cardRepoNotFound}>
                  Sorry, no GitHub repo found
                  <img
                    src={travolta}
                    alt="nothing to display"
                    width="150px"
                    height="200px"
                  />
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
