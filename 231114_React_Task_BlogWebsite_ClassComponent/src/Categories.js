import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class Categories extends Component {
    state = {
      categories: [], // Kategorilerin saklanacağı dizi.
    };
  
    componentDidMount() {
        this.getCategories(); // Bileşen yüklendiğinde kategorileri getir.
      }
    

      getCategories = () => {
        // Kategori verilerini çekmek için fetch API kullanılıyor.
        fetch("http://localhost:3000/categories")
          .then((response) => response.json()) // Gelen yanıtı JSON formatına çevir.
          .then((data) => this.setState({ categories: data })); // Elde edilen verileri categories state'ine ata.
      };
    

      render() {
        return (
          <div>
            {/*ListGroup bileşeni ile kategoriler listeleniyor. */}
            <ListGroup>
              {/*State'deki categories dizisindeki her bir kategori için ListGroupItem oluşturuluyor. */}
              {this.state.categories.map((category) => (
                <ListGroupItem
                  active={
                    // Eğer kategori, seçili kategori ise active prop'u true olur.
                    category.categoryName === this.props.currentCategory
                  }
                  onClick={() => this.props.changeCategory(category)} // Kategoriye tıklandığında changeCategory fonksiyonunu çağır.
                  key={category.id} // Her kategori için benzersiz bir key değeri.
                >
                  {category.categoryName}  {/*Kategori adını göster.*/}
                </ListGroupItem>
              ))}
            </ListGroup>
          </div>
        );
      }
    }