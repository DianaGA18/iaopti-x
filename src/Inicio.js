// src/Home.js
import { FaArrowLeft } from 'react-icons/fa';
import { Carousel, Navbar, Container, Nav, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';


const Home = ({ onBack }) => {
  const handleBackClick = () => {
    onBack();
  };

  return (
    <div className="App">

      <header className="header">
        <img className="logo" src="images/logo.png" alt="Logo" className="logo" />
        <a href="https://kubesolutions.000webhostapp.com/">Contactanos</a>
        <a href="#">Iniciar session</a>
		  <FaArrowLeft onClick={handleBackClick} size={30} style={{ cursor: 'pointer' }} />
      </header>

      <div className="bg">
      <div className="carrusel-container">
         <Carousel>
            <Carousel.Item >
               <Image className="item" src="images/img1.png" alt="First slide" fluid />
            </Carousel.Item>
            <Carousel.Item >
               <video className="item" autoPlay muted loop className="d-block w-100">
                  <source src="video/video.mp4" type="video/mp4" />
                  Error.
               </video>
            </Carousel.Item>
            <Carousel.Item>
               <Image className="item" src="images/img2.png" alt="Second slide" fluid />
            </Carousel.Item>
         </Carousel>
      </div>
      </div>

      <div className="text-container">
        <h2>Sobre Nosotros</h2>
        <p>
          IAOpti-X emplea inteligencia artificial para la deteccion de enfermedades oculares, los cuales pueden ser, Glaucoma, Carnosidad O Degeneracion macular.
        </p>
        <p>
            Como funciona?: a traves de un dispositivos especiles es capaz de capturar images medicas para que posteriormente sean analisados por nuestra inteligigencia artificial, despues de ser analizada se emitira un diagnostico que podra ser descargado en formato pdf.
        </p>
      </div>

      <footer className="footer">
        <h3>Información de Contacto:</h3>
        <p>Teléfono: (56) 1699-0155</p>
        <p>Correo Electrónico: kube.solutions23@gmail.com</p>
        <p>Dirección: Jilotepec, C.P. 54240, Jilotepec de Molina Enrriquez.</p>
      </footer>
    </div>

  );
};

export default Home;

