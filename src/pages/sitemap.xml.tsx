import { GetServerSideProps } from "next"

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://dfmabu.vercell.app</loc>
     </url>
   </urlset>
 `
}

const SiteMap = () => {}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "text/xml")
  res.write(generateSiteMap())
  res.end()

  return {
    props: {},
  }
}

export default SiteMap
