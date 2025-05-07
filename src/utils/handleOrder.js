import axios from "axios";

const handleOrder = async (product) => {
  const organizationId = process.env.NEXT_PUBLIC_ORGANIZATION_ID;
  const terminalGroupId = process.env.NEXT_PUBLIC_TERMINAL_GROUP_ID;

  try {
    const res = await axios.post("/api", {
      createOrderSettings: {
        checkStopList: false,
        servicePrint: false,
        transportToFrontTimeout: 0,
      },
      order: {
        combos: [],
        externalData: [],
        guestCount: 1,
        guests: {
          count: 1,
        },
        items: product,
        payments: [],
        tips: [],
      },
      organizationId,
      terminalGroupId,
    });

    return res.data;
  } catch (error) {
    // if (error.response?.status === 401) {
    //   return (window.location.href = "/login");
    // }
    console.error("Failed to create order:", error);
    return error.response?.data || { error: error.message };
  }
};

export default handleOrder;
