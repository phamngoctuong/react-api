import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';
import apiCaller from './../../utils/apiCaller';
class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        apiCaller('products','GET',null).then(respon=>{
            this.setState({
                products : respon.data
            })
        });
    }
    showProducts = (products) => {
        var result = null;
        if(products.length > 0){
            result = products.map((product,index)=>{
                return(
                    <ProductItem 
                        key={index} 
                        product={product} 
                        index={index}
                    >
                    </ProductItem>  
                )
            })
        }
        return result;
    }
    render() {
        var {products} = this.state;
        return (
           <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/product/add" className="btn btn-info mb-10">
                    Thêm Sản Phẩm
                </Link>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
           </div>
        );
    }
}
var mapStateToProps = state => {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps,null)(ProductListPage);