import { Carousel, Row, Col } from "antd";
import AppLayout from "../components/AppLayout";
import main1 from "../images/main1.jpg";
import main2 from "../images/main2.jpg";
import main3 from "../images/main3.jpg";
const Home = () => {
  const contentStyle = {
    height: "400px",
    width: "100%",
    color: "#fff",
    lineHeight: "400px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <>
      <AppLayout>
        <Row>
          <Col span={10} offset={7}>
            <Carousel autoplay>
              <div>
                <img src={main1} style={contentStyle} />
              </div>
              <div>
                <img src={main2} style={contentStyle} />
              </div>
              <div>
                <img src={main3} style={contentStyle} />
              </div>
              <div>
                <h3 style={contentStyle}>4</h3>
              </div>
            </Carousel>
          </Col>
          <Col span={10} offset={7}>
            <div
              style={{
                width: "100%",
                height: 130,
                background: "#1D6272",
                color: "white",
                padding: 10,
              }}
            >
              <div style={{ fontSize: 26, fontWeight: 400 }}>
                신동해그룹 경영정신
              </div>
              <div style={{ fontSize: 24, fontWeight: 300 }}>
                MANAGEMENT MOTO
              </div>
              <div style={{ fontSize: 18, fontWeight: 300 }}>
                초일류기업을 향한 신동해의 열정과 도전정신
              </div>
            </div>
            <div
              style={{
                marginTop: 4,
                width: "100%",
                height: 120,
                background: "#3996E4",
              }}
            ></div>
            <div
              style={{
                marginTop: 4,
                width: "100%",
                height: 120,
                background: "#16558B",
              }}
            ></div>
          </Col>
        </Row>
      </AppLayout>
    </>
  );
};

export default Home;
