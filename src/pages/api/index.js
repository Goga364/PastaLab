import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
const baseURL = "https://api-eu.syrve.live/api/1";
let token = null;
const apiLogin =
  process.env.SYRVE_API_LOGIN || "5da1f78c0df744f3ababc3930953b4bc";

async function fetchToken() {
  try {
    const response = await axios.post(`${baseURL}/access_token`, {
      apiLogin,
    });
    return response.data.token;
  } catch (error) {
    console.error("Failed to fetch token:", error.message);
    throw new Error("Failed to fetch token");
  }
}

async function createOrder(order) {
  try {
    const response = await axios.post(`${baseURL}/order/create`, order, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Failed to create order:", error.message);
    throw new Error("Failed to create order");
  }
}

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  if (!session?.user) {
    return res.status(401).json({ message: "Unauthorized: Please log in" });
  }

  try {
    if (!token) {
      token = await fetchToken();
    }

    const response = await createOrder(req.body);

    res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response?.status === 401) {
      try {
        token = await fetchToken();
        const response = await createOrder(req.body);
        return res.status(response.status).json(response.data);
      } catch (retryError) {
        console.error("Error during retry:", retryError.message);
        window.location.href = "/login";
        return res
          .status(retryError.response?.status || 500)
          .json({ error: retryError.message });
      }
    }

    console.error("Error:", error.message);
    res.status(error.response?.status || 500).json({
      error: error.message,
      details: error.response?.data || null,
    });
  }
}
