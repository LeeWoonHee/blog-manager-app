import axios from "axios";
import { create } from "zustand";

type BlogType = {
  id: number;
  title: string;
  titleImage: string;
  description: string;
};

type BlogStoreType = {
  blogList: BlogType[];
  accessToken: string | null;
  fetchBlogList: () => void;
  setAccessToken: (token: string) => void;
  removeAccessToken: () => void;
};

export const useBlogStore = create<BlogStoreType>((set) => ({
  blogList: [],
  accessToken: sessionStorage.getItem("accessToken"),
  fetchBlogList: async () => {
    const res = await axios.get("http://localhost:4000/blog");
    set({ blogList: res.data });
  },
  setAccessToken: (token: string) => {
    sessionStorage.setItem("accessToken", token ? token : "");
    set({ accessToken: token });
  },
  removeAccessToken: () => {
    sessionStorage.removeItem("accessToken");
    set({ accessToken: null });
  },
}));
