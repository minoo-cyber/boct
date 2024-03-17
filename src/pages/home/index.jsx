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
              <img src="assets/images/home/avatar1.png" alt="post" />
            </Typography>
            <Typography>
              Iced <span>@IcedKnife · 2h</span>
              <br />
              just bought the dumbest meme coin on $SOL and I’m 100% certain
              it’s going to 100M MCAP - it’s CT
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
              <img src="assets/images/home/avatar2.png" alt="post" />
            </Typography>
            <Typography>
              MrPunk.eth <span>@mrpunkdoteth · 2h</span>
              <br />
              $CT TO 25M SOONER THAN YOU THINK
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
              <img src="assets/images/home/avatar3.png" alt="post" />
            </Typography>
            <Typography>
              MrPunk.eth <span>@mrpunkdoteth · 2h</span>
              <br />
              $CT TO 25M SOONER THAN YOU THINK
            </Typography>
          </Grid>
          <Grid sx={wrapperBody} py={3}>
            <img src="assets/images/home/pic3.jpeg" alt="post" />
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
              <img src="assets/images/home/avatar4.png" alt="post" />
            </Typography>
            <Typography>
              MrPunk.eth <span>@mrpunkdoteth · 2h</span>
              <br />
              $CT TO 25M SOONER THAN YOU THINK
            </Typography>
          </Grid>
          <Grid sx={wrapperBody} py={3}>
            <img src="assets/images/home/pic4.jpeg" alt="post" />
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
              <img src="assets/images/home/avatar5.png" alt="post" />
            </Typography>
            <Typography>
              MrPunk.eth <span>@mrpunkdoteth · 2h</span>
              <br />
              $CT TO 25M SOONER THAN YOU THINK
            </Typography>
          </Grid>
          <Grid sx={wrapperBody} py={3}>
            <img src="assets/images/home/pic5.png" alt="post" />
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
