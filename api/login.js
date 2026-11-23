export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  const { username, password } = req.body || {};

  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Username and password required"
    });
  }

  // ⚠️ TODO: এখানে real DB check করবেন
  // Password hash compare করবেন (bcrypt), plain text না
  const isValidUser = username.length > 0 && password.length > 0;

  if (!isValidUser) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials"
    });
  }

  return res.status(200).json({
    success: true,
    message: "Login successful",
    redirectUrl: "/admin.html",
    user: {
      username: username,
      email: username.includes("@") ? username : `${username}@demo.com`,
      role: "admin"
    },
    time: new Date().toISOString()
  });
}

