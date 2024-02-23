import axios from "axios";
import { server } from "../../pages/_app";
import { DispatchProp, useDispatch } from "react-redux";
import {
  getLoginRequest,
  getLoginSuccess,
  getLoginFail,
  getRegisterFail,
  getRegisterRequest,
  getRegisterSuccess,
  getLogoutRequest,
  getLogoutSuccess,
  getLogoutFail,
  getUserRequest,
  getUserSuccess,
  getUserFail,
} from "../slices/userSlice";
import { AppDispatch } from "../store";
import toast from "react-hot-toast";

type RegistrationDetails = {
  name: string;
  email: string;
  password: string;
};

export const register =
  (details: RegistrationDetails) => async (dispatch: AppDispatch) => {
    try {
      dispatch(getRegisterRequest());
      const response = await axios.post(
        `${server}/api/user/signup`,
        {
          name: details.name,
          email: details.email,
          password: details.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );

      console.log(response.data);
      const User: UserType = response.data;
      dispatch(getRegisterSuccess(User));
      toast.success("Registered Succesfully");
    } catch (error: any) {
      console.log(error);
      dispatch(getRegisterFail(error.response.data.message));
      toast.error(error.response.data.message);
    }
  };

export const login =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(getLoginRequest());
      const response = await axios.post(
        `${server}/api/user/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );

      console.log(response.data);
      const User: UserType = response.data;
      dispatch(getLoginSuccess(User));

      toast.success("Welocme Back");
    } catch (error: any) {
      console.log(error);
      dispatch(getLoginFail(error.response.data.message));

      toast.error(error.response.data.message);
    }
  };

  export const getUser = () => async (dispatch: AppDispatch) => {
    try {
      dispatch(getUserRequest());
      const { data } = await axios.get(`${server}/api/user/getUser`, {
        withCredentials: true,
      });
  
      dispatch(getUserSuccess(data?.user));
    } catch (error: any) {
      console.log(error);
      dispatch(getUserFail(error.response.data.message));
  
    }
  };

  
export const logout = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(getLogoutRequest());
    const { data } = await axios.get(`${server}/api/user/logout`, {
      withCredentials: true,
    });

    dispatch(getLogoutSuccess(data?.message));
    toast.success(data?.message);
  } catch (error: any) {
    console.log(error);
    dispatch(getLogoutFail(error.response.data.message));

    toast.error(error.response.data.message);
  }
};
