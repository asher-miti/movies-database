import React from "react";

import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as FiIcons from "react-icons/fi";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Trending",
    path: "/",
    icon: <FiIcons.FiTrendingUp />,
    cName: "nav-text",
  },
  {
    title: "Coming Soon",
    path: "/",
    icon: <CgIcons.CgCalendarNext />,
    cName: "nav-text",
  },
  {
    title: "Favourites",
    path: "/",
    icon: <MdIcons.MdFavorite />,
    cName: "nav-text",
  },
];
