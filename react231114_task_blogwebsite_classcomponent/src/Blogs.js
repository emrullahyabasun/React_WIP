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

export default class Blogs extends Component {
  render() {
    const { blogs } = this.props; // Ürünler, props'tan alınıyor.

    return (
        <div>
          {/* // Seçili kategorinin başlığını gösterir. */}
          <h2>{this.props.currentCategory}</h2> 
          <CardGroup>
            {/* // Ürünler dizisindeki her bir ürün için bir Card bileşeni oluşturuluyor. */}
            {blogs.map((blog) => (
              <Col xs="3">
                 {/* // Her kart 3 sütun genişliğinde. */}
                <Card
                  style={{ marginLeft: "10px", marginRight: "10px" }} // Kartlara marjin veriliyor.
                  key={blog.id} // Her kart için benzersiz bir key.
                >
                  <CardImg
                    top
                    width="100%"
                    src={blog.image} // Ürün resmi
                    alt={blog.title} // Resmin alternatif metni
                  />
                  <CardBody>
                    <CardTitle tag ="h5">{blog.title}</CardTitle>
                    <CardText>{blog.content}</CardText> 
   
                    <Button onClick={() => this.props.addToCart(blog)}> 
                      İçeriği Gör
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