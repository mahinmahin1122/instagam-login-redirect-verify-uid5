
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  const { username, email } = req.body || {};

  if (!username || !email) {
    return res.status(400).json({
      success: false,
      message: "Username and email required"
    });
  }

  // এখানে নিজের database integration যুক্ত করবে।
  // Password কখনো plain text হিসেবে সংরক্ষণ করবে না।

  return res.status(200).json({
    success: true,
    message: "Login request received",
    username,
    email,
    time: new Date().toISOString()
  });
}
