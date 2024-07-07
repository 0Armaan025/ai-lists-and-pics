import Navbar from "@/components/navbar/Navbar";
import React from "react";
import "./homepage.css";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      <Navbar />

      <div className="middlePart flex flex-row justify-start items-center ml-8">
        <div
          className="flex flex-col justify-start items-center ml-16 mt-16"
          style={{
            marginleft: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <div
            style={{
              padding: "12px",
              paddingBottom: "2px",
              background: "#e1e2f3",
              marginLeft: "25px",
              borderRadius: "12px",
              marginTop: "12px",
            }}
          >
            <h3
              className=""
              style={{
                fontSize: "5rem",
                width: "450px",
                fontFamily: "Hind",
                lineHeight: "70px",
                fontWeight: "400",
                marginLeft: "30px",
                marginTop: "30px",
              }}
            >
              New goals require new knowledge
            </h3>
            <h5
              style={{ marginLeft: "30px", width: "420px", marginTop: "80px" }}
            >
              We have created a platform that will help users to directly create
              lists along with images{" "}
            </h5>
            <br />
          </div>
          <div
            className="flex flex-row justify-start items-start"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <div className="box1" style={{ marginTop: "12px" }}>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YSUyMHBlcnNvbiUyMHN0dWR5aW5nJTIwb25saW5lfGVufDB8fDB8fHww"
                style={{
                  height: "180px",
                  width: "400px",
                  borderRadius: "12px",
                }}
              />
            </div>
            <div className="box2"></div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center"></div>
      </div>
    </div>
  );
};

export default HomePage;
