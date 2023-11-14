import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";   //Reactstrapten gerekli bileşenleri çeker.
import Cart from "./Cart"; // Sepet bileşeni
import Logo from './logo.png'; // Logo resmi

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
              <NavItem>
                <NavLink href="/components/">Components</NavLink> {/* Navigasyon linki */} 
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>  {/* Başka bir navigasyon linki */} 
              </NavItem>
               {/* Sepet bileşeni, cart ve removeToCart props'ları ile birlikte */} 
              <Cart
                cart={this.props.cart}
                removeToCart={this.props.removeToCart}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}