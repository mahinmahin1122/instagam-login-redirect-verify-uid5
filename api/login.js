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

  // TODO: এখানে নিজের database integration যুক্ত করবে।
  // Password কখনো plain text হিসেবে সংরক্ষণ করবে না।

  // Simple demo auth check (replace with real DB check)
  const isValidUser = username.length > 0 && email.includes("@");

  if (!isValidUser) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials"
    });
  }

  // Redirect URL admin panel-এ
  const redirectUrl = "/admin";

  return res.status(200).json({
    success: true,
    message: "Login successful",
    redirectUrl: redirectUrl,
    user: {
      username,
      email,
      role: "admin"
    },
    time: new Date().toISOString()
  });
}
