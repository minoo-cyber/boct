import { Grid, Typography } from "@mui/material";
import { wrapperBox } from "./side.style";

const RightSideBar = () => {
  return (
    <Grid sx={wrapperBox} pt={5}>
      <Grid>
        <Typography variant="h5" mb={3}>
          $CT
        </Typography>
        <Typography mb={2}>
          <span>$CT</span> is exactly the place where you want to be.
        </Typography>
        <Typography mb={2}>
          Here is where you can make generational wealth, or gamble all your
          income and become broke in a matter of days.
        </Typography>
        <Typography mb={2}>It is really just all up to you.</Typography>
        <Typography mb={2}>And that is why it is so fantastic.</Typography>
        <Typography mb={2}>
          <span>$CT</span> is the best place in crypto.
        </Typography>
        <Typography mb={2}>Want to be part of $CT?</Typography>
        <Typography mb={2}>DM us on Telegram.</Typography>
      </Grid>
      <Grid mt={3}>
        <Typography variant="h5" mb={3}>
          CryptoTrends
        </Typography>
        <Typography mb={2}>
          1 · CryptoT · Trending
          <br />
          <span>$CT</span> to become #1 meme on SOL.
          <br />
          342K posts
        </Typography>
        <Typography mb={2}>
          2 · Trending
          <br />
          Ansem endorses <span>$CT</span> as the best $SOL meme.
          <br />
          252K posts
        </Typography>
        <Typography mb={2}>
          3 · Scientific Discoveries · Trending
          <br />
          Shitcoins no more. <span>$CT</span> solves the paradox.
          <br />
          143K posts
        </Typography>
        <Typography mb={2}>
          A4 · Life Lessons · Trending
          <br />
          Make generational wealth by max bidding <span>$CT</span>.
          <br />
          143K posts
        </Typography>
        <Typography mb={2}>
          4 · News · Trending
          <br />
          Solana ecosystem to be dominated by <span>$CT</span>.
          <br />
          143K posts
        </Typography>
      </Grid>
    </Grid>
  );
};
export default RightSideBar;
