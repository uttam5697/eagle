import api from "../lib/api";

let authkey = localStorage.getItem("authKey");
export const getCartData = async () => {
    const res = await api.post(
        "userauth/getusercarts",
        {}, // empty body
        { headers: { "auth_key": authkey } }
    );
    return res.data;
};

export const getAllAddress = async () => {
    const res = await api.post(
        "userauth/getappuseraddress",
        {}, // empty body
        { headers: { "auth_key": authkey } }
    );
    return res.data;
};