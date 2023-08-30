import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

function Sidemenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Home",
            icon: <HomeIcon style={{ fontSize: 24 }} />, 
            key: "/",
          },
          {
            label: "Dashboard",
            key: "/dashboard",
            icon: <HomeIcon style={{ fontSize: 24 }} />, 
          },
          {
            label: "Camera Accessibility",
            key: "/cam",
            icon: <HomeIcon style={{ fontSize: 24 }} />, 
          },
          {
            label: "User Details",
            key: "/userdetails",
            icon: <HomeIcon style={{ fontSize: 24 }} />, 
          },
        ]}
      ></Menu>
    </div>
  );
}
export default Sidemenu;
