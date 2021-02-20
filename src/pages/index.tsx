import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Code } from "../components/code";
import { Link } from "../components/link";

const command =
  "Top ecommerce  platforms to start an online";

const App = () => (
  <Layout>
    <SEO />
    <Code>{command}</Code>
    <Link to="/about">About</Link>
  </Layout>
);

export default App;
