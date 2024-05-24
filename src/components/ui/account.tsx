import React, { useState } from "react";
import "./signInUp.scss";
import { Avatar, Button, Divider, Popover } from "antd";
import { DownCircleTwoTone } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Account() {
  const navigate = useRouter();

  return (
    <div className="signInUp">
      <Avatar
        style={{
          height: "3.3em",
          width: "3.5em",
          cursor: "pointer",
        }}
        src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/406534560_1295561694488229_5721930519039440287_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9hW9UL5cfwMQ7kNvgF2AdUv&_nc_ht=scontent.fsgn2-4.fna&oh=00_AYA2xvATG4H45FAEJ9tKMM-gTshCfZN29ba0N4s2C1H45A&oe=6655FB6E"
      />
      <div className="signInUp__active">
        <Popover
          placement="bottomRight"
          title={
            <>
              <div
                className="current-account"
                onClick={() => navigate.push("/profile")}
              >
                Your Profile
              </div>
              <div
                className="current-account"
                onClick={() => navigate.push("/profile")}
              >
                Logout
              </div>
            </>
          }
        >
          <div className="signInUp__active__current-account">
            <DownCircleTwoTone
              twoToneColor="#8c2db4"
              className="signInUp__active__current-account__dropdown"
            />
          </div>
        </Popover>
      </div>
    </div>
  );
}

export default Account;
