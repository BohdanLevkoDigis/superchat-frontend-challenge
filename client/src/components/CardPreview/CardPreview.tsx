import React from "react";
import { GitHub } from "@material-ui/icons";
import { Rating, Skeleton } from "@material-ui/lab";
import { ILinkPage } from "../../Pages/LinkCreation/LinkCreation";
import { useStyles } from "./styles";

export const CardPreview: React.FC<ILinkPage> = ({
  repositoryName,
  userName,
  icon,
  color,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <div
        style={{
          backgroundColor: color,
          height: "220px",
          padding: "10px 10px 20px",
          textAlign: "left",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      >
        <div className={classes.cardTitle}>
          <div>Card Prieview</div>
          <GitHub className={classes.cardGitIcon} />
        </div>
        {!icon ? (
          <Skeleton variant="circle" className={classes.cardRepositoryIcon} />
        ) : (
          <img alt="hello" className={classes.cardRepositoryIcon} src={icon} />
        )}
        <div className={classes.cardRepositoryAuthor}>
          Author: <span className={classes.cardSubText}>{userName}</span>
        </div>
      </div>
      <div className={classes.cardBody}>
        <div className={classes.cardRepository}>
          <div className={classes.cardRepositoryTitle}>
            Title: <span className={classes.cardSubText}>{repositoryName}</span>
          </div>
          <div className={classes.cardRepositoryDescription}>Description</div>
          <div className={classes.cardRepositoryStars}>
            Stars:
            <Rating
              disabled
              value={3}
              className={classes.cardRepositoryRating}
            />
          </div>
          <div className={classes.cardRepositoryContributors}>Contributors</div>
          <div className={classes.cardRepositoryStars}>Star the repo</div>
        </div>
      </div>
    </div>
  );
};
