module.exports = {
  siteUrl: 'https://www.bffgram.com/', // Replace with your site URL
  generateRobotsTxt: true, // (optional) Generate robots.txt file
  additionalPaths: async () => {
    return ['/about', '/tokenomics']; // Add additional URLs here
  },
  output: 'sitemap.xml', // Specify the sitemap filename
};
