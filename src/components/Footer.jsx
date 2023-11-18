import Layout from "./Layout";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer
        className="bg-indigo-300 w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base
    "
      >
        <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
          <span>{new Date().getFullYear()} &copy; Mauricio Espinoza.</span>
        </Layout>
      </footer>
    </>
  );
};

export default Footer;
