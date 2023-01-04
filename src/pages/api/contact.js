// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default (req, res) => {
//   res.statusCode = 200
//   res.json({ name: 'John Doe' })
// }
const helloApi = (req, res) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
};

export default helloApi