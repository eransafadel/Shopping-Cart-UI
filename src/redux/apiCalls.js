import { publicRequest } from "../api";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispach, user) => {
    dispach(loginStart());
    try {
        const res = await publicRequest.post('/auth/login', user);
        dispach(loginSuccess(res.data));
    } catch (err) {
        dispach(loginFailure());
    }


};