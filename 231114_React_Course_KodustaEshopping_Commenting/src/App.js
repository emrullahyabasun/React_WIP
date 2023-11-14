import React from "react";
import { Component } from "react";
import Categories from "./Categories";
import Products from "./Products";      
import Header from "./Header";          
import { Col, Container, Row } from "reactstrap";  
// Bileşenler import edildi.
export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: [],
  };
//Bu state kullanımı ile birden çok state yazmak yerine direkt tutulması gereken bilgileri tek bir state içerisinde yazarak tasarruf ediyoruz.

  changeCategory = (category) => { //changeCategory isimli bir arrow function tanımlanıyor.
    this.setState({ currentCategory: category.categoryName });  // Seçilen kategoriyi günceller ve ürünleri getirir.
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";  // Ürünleri almak için kullanılacak URL.
    if (categoryId) {
      url += "?categoryId=" + categoryId;  // Eğer kategori ID'si varsa, URL'e ekler.
    }

    fetch(url)  // URL'den veri çeker.
      .then((response) => response.json())  // Gelen yanıtı JSON'a çevirir.
      .then((data) => this.setState({ products: data }));  // Elde edilen veriyi products state'ine atar.
  };

  componentDidMount() {
    this.getProducts();  // Bileşen yüklendiğinde ürünleri getirir.
  }

  addToCart = (product) => {
    let newCart = this.state.cart;  // Mevcut sepeti bir değişkene atar.
    var addedItem = newCart.find((c) => c.product.id === product.id);  // Sepette ürün var mı diye kontrol eder.
    if (addedItem) {
      addedItem.quantity += 1;  // Ürün zaten varsa, miktarını artırır.
    } else {
      newCart.push({ product: product, quantity: 1 });  // Ürün yoksa yeni ürün olarak sepete ekler.
    }
    this.setState({ cart: newCart });  // Sepeti günceller.
  };

  removeToCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);  // Ürünü filtreleyerek sepetten çıkarır.
    this.setState({ cart: newCart });  // Sepeti günceller.
  };

  render() {
    return (
      <Container>
        <Header cart={this.state.cart} removeToCart={this.removeToCart} />  
        <Row>
          <Col xs="3">
            <Categories
              changeCategory={this.changeCategory}
              currentCategory={this.state.currentCategory}
            />  
          </Col>
          <Col xs="9">
            <Products
              addToCart={this.addToCart}
              products={this.state.products}
              currentCategory={this.state.currentCategory}
            />  
          </Col>
        </Row>
      </Container>
    );
  }
}