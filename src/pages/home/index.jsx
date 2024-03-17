import { Grid, Typography } from "@mui/material";
import Layout from "../../components/layout";
import {
  wrapperBody,
  wrapperFooter,
  wrapperHeader,
  wrapperPost,
} from "./home.style";

const Home = () => {
  return (
    <Layout>
      <Grid sx={wrapperPost} pt={3}>
        <Typography variant="h5">Home</Typography>
        <Grid>
          <Grid sx={wrapperHeader}>
            <Typography>
              <img
                src="https://pbs.twimg.com/profile_images/1755473628450230272/m6aK9ief_x96.jpg"
                alt="post"
              />
            </Typography>
            <Typography>
              Ansem <span>@blknoiz06</span>
              <br />
              soylana manlets roll call
              <br />
              $BOCT
            </Typography>
          </Grid>
          <Grid sx={wrapperBody} py={3}>
            <img src="assets/images/home/pic1.jpeg" alt="post" />
          </Grid>
          <Grid sx={wrapperFooter}>
            <span>
              <em className="fa fa-comment-o"></em>587
            </span>
            <span>
              <em className="fa fa-retweet"></em>743
            </span>
            <span>
              <em className="fa fa-heart-o"></em>
              3.1 k
            </span>

            <span>
              <em className="fa fa-upload"></em>
            </span>
          </Grid>
        </Grid>
        <Grid>
          <Grid sx={wrapperHeader}>
            <Typography>
              <img
                src="https://pbs.twimg.com/profile_images/1758646426840584192/x0ZLPgjw_x96.jpg"
                alt="post"
              />
            </Typography>
            <Typography>
              icebergy <span>@icebergy_</span>
              <br />
              $BOCT
            </Typography>
          </Grid>
          <Grid sx={wrapperBody} py={3}>
            <img src="assets/images/home/pic2.jpeg" alt="post" />
          </Grid>
          <Grid sx={wrapperFooter}>
            <span>
              <em className="fa fa-comment-o"></em>587
            </span>
            <span>
              <em className="fa fa-retweet"></em>743
            </span>
            <span>
              <em className="fa fa-heart-o"></em>
              3.1 k
            </span>

            <span>
              <em className="fa fa-upload"></em>
            </span>
          </Grid>
        </Grid>
        <Grid>
          <Grid sx={wrapperHeader}>
            <Typography>
              <img
                src="https://pbs.twimg.com/profile_images/1767768798436950016/kgnhUC70_x96.jpg"
                alt="post"
              />
            </Typography>
            <Typography>
              EllioTrades<span>@elliotrades</span>
              <br />
              Imagine being sidelined during the greatest wealth transfer of all
              time
              <br />
              $BOCT
            </Typography>
          </Grid>

          <Grid sx={wrapperFooter}>
            <span>
              <em className="fa fa-comment-o"></em>587
            </span>
            <span>
              <em className="fa fa-retweet"></em>743
            </span>
            <span>
              <em className="fa fa-heart-o"></em>
              3.1 k
            </span>

            <span>
              <em className="fa fa-upload"></em>
            </span>
          </Grid>
        </Grid>
        <Grid>
          <Grid sx={wrapperHeader}>
            <Typography>
              <img
                src="https://pbs.twimg.com/profile_images/1606041732004593664/JxLZNWsq_x96.jpg"
                alt="post"
              />
            </Typography>
            <Typography>
              K A L E O<span>@CryptoKaleo</span>
              <br />
              TWO HUNDRED UNITED STATES DOLLARS FOR ONE SOLANA
              <br />
              $BOCT
            </Typography>
          </Grid>
          <Grid sx={wrapperFooter}>
            <span>
              <em className="fa fa-comment-o"></em>587
            </span>
            <span>
              <em className="fa fa-retweet"></em>743
            </span>
            <span>
              <em className="fa fa-heart-o"></em>
              3.1 k
            </span>

            <span>
              <em className="fa fa-upload"></em>
            </span>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
