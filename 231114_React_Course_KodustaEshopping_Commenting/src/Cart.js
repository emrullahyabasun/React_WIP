import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default class Cart extends Component {
  render() {
    return (
      
      <UncontrolledDropdown nav inNavbar>
         {/* Sepetin başlığını gösteren DropdownToggle bileşeni. */}
        
        <DropdownToggle nav caret>
          Sepet - {this.props.cart.length} 
          {/* Sepetin uzunluğu burada gösteriliyor. */}
        </DropdownToggle>
        {/* // Dropdown menüsü */}
        <DropdownMenu right>
          {/* // cart prop'undaki her bir ürün için DropdownItem oluşturuluyor. */}
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              {/* // Ürünü sepetten çıkarmak için X işaretine tıklama işlevi. */}
              <span
                onClick={() => this.props.removeToCart(cartItem.product)}
                className="badge badge-danger"
                style={{ marginRight: "10px", backgroundColor: "red" }}
              >
                X
              </span>
              {cartItem.product.productName} 
               {/* Ürün adı burada gösteriliyor. */}
              {/* // Ürün miktarını gösteren etiket. */}
              <span
                className="badge badge-warning"
                style={{ backgroundColor: "green" }}
              >
                {cartItem.quantity}
              </span>
            </DropdownItem>
          ))}

          {/* // Dropdown menüsünde bir ayracı (divider) gösterir. */}

          <DropdownItem divider />
          {/* // Sepeti boşaltma seçeneği. */}
          <DropdownItem>Sepeti Boşalt</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}