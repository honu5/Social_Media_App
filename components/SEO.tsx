import Head from "next/head";

const SEO = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};
//SEO component to set the title of the page, can be extended to include meta tags and other SEO related tags in the future
export default SEO;
