// components/NewsLayout.jsx
import React from "react";
import { Grid, Divider } from "@mui/material";
import NewsLeftCard from "./NewsLeftCard";
import NewsRightCard from "./NewsRightCard";

const NewsLayout = () => {
  return (
    <Grid container spacing={6} px={{ xs: 2, md: 10 }} pb={9}>
      {/* LEFT SIDE */}
      <Grid item xs={12} md={6}>
        {/* Group 1312 */}
        <NewsLeftCard
          image="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExODd3YXdzaTdjZ3I5bDQ5ODFybW93ZWpyZ2Z0anVrZ3k0Z2Z0czRteSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/DN11PtePHyN2LYZic8/giphy.gif"
          author="John smash"
          time="5min"
          title="Lorem Ipsum is simply dummy text dummy text"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />

        {/* Line 2 */}
        <Divider
          sx={{
            p: 4,
            my: 7,
            borderColor: "#A5A5A5",
            width: "100%",
            height: "0.7px",
          }}
        />

        {/* Group 1313 */}
        <NewsLeftCard
          image="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3h1N3c5NHFqMHRycHV1d29icHZhNjE5a2RzOW50bjAwN2JsaHZlbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/hJ992Y6ZWFj5slhi6x/giphy.gif"
          author="John smash"
          time="5min"
          title="Lorem Ipsum is simply dummy text dummy text"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />
      </Grid>

      {/* RIGHT SIDE */}
      <Grid item xs={12} md={6}>
        <NewsRightCard />
      </Grid>
    </Grid>
  );
};

export default NewsLayout;
