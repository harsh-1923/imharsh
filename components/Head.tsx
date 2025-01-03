import Head from "next/head";
import React from "react";

const HeadTags = () => {
  return (
    <Head>
      <title>Harsh Sharma</title>
      <meta name="description" content="Design Engineer">
        <meta property="og:url" content="https://imharsh.in" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Harsh Sharma" />
        <meta property="og:description" content="Design Engineer" />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/images/5e78c565-001e-4868-a224-0164a3adee4b.png?token=KPTGG4XxYJmISrP87AzXT_afeWrG6kZFJaW50jVz1cY&height=624&width=1200&expires=33271886426"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="imharsh.in" />
        <meta property="twitter:url" content="https://imharsh.in" />
        <meta name="twitter:title" content="Harsh Sharma" />
        <meta name="twitter:description" content="Design Engineer" />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/images/5e78c565-001e-4868-a224-0164a3adee4b.png?token=KPTGG4XxYJmISrP87AzXT_afeWrG6kZFJaW50jVz1cY&height=624&width=1200&expires=33271886426"
        />
      </meta>
    </Head>
  );
};

export default HeadTags;
