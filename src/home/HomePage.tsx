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
          className="flex flex-col justify-start items-center ml-16"
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
              style={{
                marginLeft: "30px",
                width: "420px",
                marginTop: "40px",
                fontFamiliy: "Poppins,sans-serif",
              }}
            >
              We have created a platform that will help users to directly create
              lists along with images{" "}
            </h5>

            <br />
            <div
              className="fullDiv"
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <input
                type="button"
                style={{
                  background: "#f89e2d",
                  paddingLeft: "12px",
                  paddingRight: "12px",
                  paddingTop: "6px",
                  paddingBottom: "6px",
                  borderRadius: "8px",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "18px",
                  fontFamily: "Poppins",
                }}
                value="Go ->"
              />
            </div>
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
            <div
              className="box1"
              style={{ marginTop: "15px", marginLeft: "30px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YSUyMHBlcnNvbiUyMHN0dWR5aW5nJTIwb25saW5lfGVufDB8fDB8fHww"
                style={{
                  height: "180px",
                  width: "320px",
                  borderRadius: "12px",
                }}
              />
            </div>
            <div className="box2">
              <img
                src="https://cdn-icons-png.freepik.com/512/8805/8805200.png"
                style={{
                  height: "180px",
                  width: "180px",
                  marginLeft: "8px",
                  borderRadius: "12px",
                }}
              />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <br />
        </div>

        <div
          className="flex flex-col "
          style={{
            marginTop: "0px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <img
            src="https://www.free-mockup.com/wp-content/uploads/edd/2021/07/Hand-Holding-Smartphone-PSD-Mockup.jpg"
            // className="mix-blend-"
            style={{
              margin: "12px",
              mixBlendMode: "multiply",
              height: "105vh",
              width: "700px",
              borderRadius: "12px",
              marginBottom: "30px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
