import React from "react";
import { Grid } from "@mui/material";
import NewsLeftCard from "./NewsLeftCard";
import NewsRightCard from "./NewsRightCard";

const NewsBottomSection = () => {
  return (
    <Grid container spacing={4}>
      {/* Left Featured News Card */}
      <Grid item xs={12} md={7}>
        <NewsLeftCard
          image="https://i.imgur.com/CzXTtJV.jpg"
          author="John Smash"
          time="5 min read"
          title="Red Shadow: Our Newest FPS Launch Hits 1M Downloads in 72 Hours"
          content="Our latest action-packed shooter 'Red Shadow' just shattered records with over 1 million downloads globally. Here's a breakdown of what made this launch a success."
        />
      </Grid>

      {/* Right Side Small News Cards */}
      <Grid item xs={12} md={5}>
        <NewsRightCard
          image="https://i.imgur.com/s8K7EZJ.jpg"
          author="Ava Xtreme"
          tagColor="#1B4EFF"
          time="3 min read"
          title="Dev Diary: How We Designed the Boss AI in ‘Titan Siege’"
        />
        <NewsRightCard
          image="https://i.imgur.com/lZ3FFYO.jpg"
          author="Marcus Byte"
          tagColor="#DC4200"
          time="4 min read"
          title="The Art of Motion: Crafting Cinematic Cutscenes in Unreal Engine 5"
        />
        <NewsRightCard
          image="https://i.imgur.com/qfsPN0g.jpg"
          author="Lana Pixel"
          tagColor="#00DC8D"
          time="2 min read"
          title="Top 10 Indie Games We’re Watching This Year"
        />
      </Grid>
    </Grid>
  );
};

export default NewsBottomSection;
