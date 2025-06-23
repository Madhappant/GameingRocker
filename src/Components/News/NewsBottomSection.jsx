// components/NewsBottomSection.jsx
import React from "react";
import { Grid } from "@mui/material";
import NewsLeftCard from "./NewsLeftCard";
import NewsRightCard from "./NewsRightCard";

const NewsBottomSection = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={7}>
        <NewsLeftCard
          image="https://i.imgur.com/fakegame.jpg"
          author="John smash"
          time="5min"
          title="Lorem Ipsum is simply dummy text dummy text"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
        />
      </Grid>
      <Grid item xs={12} md={5}>
        {[...Array(3)].map((_, i) => (
          <NewsRightCard
            key={i}
            image="https://i.imgur.com/rightimg.jpg"
            author="John smash"
            tagColor="#1B4EFF"
            time="5min"
            title="Lorem Ipsum is simply dummy text dummy text ?"
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default NewsBottomSection;
