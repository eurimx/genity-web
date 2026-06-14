export default async function handler(req, res) {

  const { job_id } = req.query;

  try {

    const response = await fetch(
      `https://api.genityboost.site/v1/jobs/${job_id}`,
      {
        headers: {
          "X-API-Key": process.env.API_KEY
        }
      }
    );

    const data = await response.json();

    res.status(200).json(data);

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }
}