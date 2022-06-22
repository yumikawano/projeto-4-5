import { Carousel, Image } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import Banner1 from "../../assets/images/banner1.jpg";
import Banner2 from "../../assets/images/banner2.jpg";
import Banner3 from "../../assets/images/Banner3.jpg";


export function HomeView () {
    return(
        <Layout>
        <Carousel fade>
          <Carousel.Item>
            <Image className="d-block w-100" src={Banner1} alt="First slide" height={500} />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image className="d-block w-100" src={Banner2} alt="Second slide" height={500} />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image className="d-block w-100" src={Banner3} alt="Third slide" height={500} />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </Layout>

    )
  }