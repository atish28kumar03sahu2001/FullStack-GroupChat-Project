import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "ChatPulse: Atish Kumar Sahu",
  description = "Full Stack Group Chat App (ChatPulse) Project Created By Atish Kumar Sahu",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
