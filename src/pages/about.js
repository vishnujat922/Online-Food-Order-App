import React from "react";
import Layout from "./../components/layouts/layouts";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 10,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "4rem",
          },
          "& p": {
            textAlign: "justify",
            fontSize:'1.5rem',
            fontWeight:'light',
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4"> Wel Come To My Food Order App</Typography>
        <p>
        Indian food is different from rest of the world not only in taste but also in cooking methods. It reflects a perfect blend of various cultures and ages. Just like Indian culture, food in India has also been influenced by various civilizations, which have contributed their share in its overall development and the present form.
        </p>
        <br />
        <p>
        India has a rich culinary heritage. Indian cuisine has a 5000-year-old history. Mythological beliefs and traditions have played an important role in its evolution and development. The main Indian food was based on Hinduism but the Islamic influence during the Mughal era, the Persian exchanges with the Middle East and the British colonial system have all contributed immensely towards laying the foundation of the Indian cuisine
        </p>
        <br/>
        <p>
        India is a big country with many states and regions. Each region   offers a unique assortment of dishes and cooking techniques. Each regional cuisine uses its own locally grown herbs, spices, fruits and vegetables. These regional cuisines collectively combined together form the very delightful Indian Cuisine.
        </p>
        <br/>
        <p>
        The staple Indian foods are Rice, Wheat and Lentils. And no Indian dish is complete without spices. Indian food is a combination of all six tastes like sweet, sour, salty, bitter, spicy and astringent. In India different dishes are prepared for different festivals. Every festival tends to be complete only when special food associated with that festival is cooked on that day. Like Holi can not be complete without Gujhiya and Eid without Sewai. India is the only country in the world where there is Unity in Diversity not only its culture & religion but also its cuisine.
        </p>
        <br/>
        <p>
        Foods of India are better known for its spiciness. Throughout India, be it North India or South India, spices are used generously in food. But one must not forget that every single spice used in Indian dishes carries some or the other nutritional as well as medicinal properties.
        </p>
        <p>
        Food in the north India, to begin with, Kashmiri cuisines reflect strong Central Asian influences. In Kashmir, mostly all the dishes are prepared around the main course of rice found abundantly in the beautiful valley. Another delicious item cooked here is the ‘Saag‘ that is prepared with a green leafy vegetable known as the ‘Hak‘.
        </p>
      </Box>
    </Layout>
  );
};

export default About;