import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardGroup,
  CardTitle,
  Button,
  Col,
} from "reactstrap";

export default class Products extends Component {
  render() {
    const { products } = this.props; // Ürünler, props'tan alınıyor.

    return (
      <div>
        {/* // Seçili kategorinin başlığını gösterir. */}
        <h2>{this.props.currentCategory}</h2> 
        <CardGroup>
          {/* // Ürünler dizisindeki her bir ürün için bir Card bileşeni oluşturuluyor. */}
          {products.map((product) => (
            <Col xs="3">
               {/* // Her kart 3 sütun genişliğinde. */}
              <Card
                style={{ marginLeft: "10px", marginRight: "10px" }} // Kartlara marjin veriliyor.
                key={product.id} // Her kart için benzersiz bir key.
              >
                <CardImg
                  top
                  width="100%"
                  src={product.image} // Ürün resmi
                  alt={product.productName} // Resmin alternatif metni
                />
                <CardBody>
                  <CardTitle>{product.productName}</CardTitle>
                   {/* // Ürün adı */}
                  <CardText>{product.desc}</CardText> 
                  {/* // Ürün açıklaması */}
                  <CardText>
                    <small className="text-muted">{product.price} ₺</small> 
                    {/* // Ürün fiyatı */}
                  </CardText>
                  <Button onClick={() => this.props.addToCart(product)}> 
                    Sepete Ekle 
                    {/* // Sepete ekle butonu */}
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </CardGroup>
      </div>
    );
  }
}