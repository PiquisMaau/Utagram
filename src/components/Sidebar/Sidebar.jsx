import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { menu } from './SlidebarConfig.js';
const Sidebar = () => {
const [activeTab, setActiveTab] = useState("Home");
const navigate = useNavigate();

const handleTabClick = (title) => {
setActiveTab(title);
if (title === "Profile") {
navigate("/username");
} else if (title === "Home") {
navigate("/");
}
};

return (
null
);
};

export default Sidebar;