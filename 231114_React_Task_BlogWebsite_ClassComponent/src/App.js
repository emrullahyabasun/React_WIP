import './App.css';
import React from "react";
import { Component } from "react";
import Categories from "./Categories";
import Blogs from "./Blogs";
import Header from "./Header";
import { Col, Container, Row } from "reactstrap";



export default class App extends Component {
  state = {
    currentCategory: "",
    blogs: [],
  };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getBlogs(category.id)
  };

  getBlogs = (categoryId) => {
    let url = "http://localhost:3000/blogs";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ blogs: data }))
  };

  componentDidMount() {
    this.getBlogs();
  }

  render() {
    return (
    
    <Container>
      <Header></Header>  
      <Row>
        <Col xs="3">
          <Categories
            changeCategory={this.changeCategory}
            currentCategory={this.state.currentCategory}
          />  
        </Col>
        <Col xs="9">
          <Blogs
            blogs={this.state.blogs}
            currentCategory={this.state.currentCategory}
          />  
        </Col>
      </Row>
    </Container>
    );
  }
}

