
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  try {
    const { username, email } = req.body || {};

    const identifier = (
      username || email || ""
    ).trim();

    if (!identifier) {
      return res.status(400).json({
        success: false,
        message: "Username or email required"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Request received",
      identifier,
      time: new Date().toISOString()
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
}
