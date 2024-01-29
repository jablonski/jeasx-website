import Layout from "../components/Layout";

/**
 * @param {import("./types").RouteProps} props
 */
export default function Showcase({}) {
  return (
    <Layout title="Showcase" description="Illustrative use cases for jeasx">
      <dl>
        <dt>
          <a href="https://expo.jeasx.dev" target="_blank">
            jeasx-expo
          </a>
        </dt>
        <dd>
          <p>
            A compilation of concise examples showcasing the capabilities of
            server-rendered JSX.
          </p>
        </dd>
        <dt>
          <a href="https://github.com/jeasx/jeasx-website" target="_blank">
            jeasx-website
          </a>
        </dt>
        <dd>
          <p>
            This website is built with jeasx. Check out the GitHub repository to
            learn how to integrate SCSS into your workflow.
          </p>
        </dd>
        <dt>
          <a href="https://www.lottoindeutschland.de" target="_blank">
            LOTTO in Deutschland
          </a>
        </dt>
        <dd>
          <p>
            An informational website about LOTTO in Germany, constructed using
            jeasx and achieving outstanding page speed scores.
          </p>
        </dd>
      </dl>
    </Layout>
  );
}
