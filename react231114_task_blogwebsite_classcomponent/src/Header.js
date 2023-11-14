import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from "reactstrap";  
import Logo from './Logo.png'; 

export default class Header extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this); // Navbar'ın açılıp kapanmasını kontrol eden fonksiyonu bağlar
      this.state = {
        isOpen: false, // Navbar'ın açık olup olmadığını tutan state
      };
    }
  
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen, // Navbar durumunu değiştirir (açık/kapalı)
      });
    }
  

    render() {
        return (
          <div>
            <Navbar color="light" light expand="md">{/* Navbar bileşeni*/}
              { /*Navbar markası/logo, tıklandığında anasayfaya yönlendirir*/}
              <NavbarBrand href="/">
                <img src={Logo} alt="Logo" style={{ width: '150px' }} />  {/*Logo resmi */}
              </NavbarBrand>
                {/* Navbar'ı açıp kapatmak için buton*/}
              <NavbarToggler onClick={this.toggle} />
               {/*Navbar içeriği, isOpen durumuna göre gösterilir/gizlenir*/}
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
      }
    }

