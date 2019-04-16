import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import {connect} from 'react-redux';
import axios from 'axios';
class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        axios({
            method: 'get',
            url: 'http://localhost:3000/products'
        }).then(respon=>{
            this.setState({
                products : respon.data
            })
        }).catch(error=>{
            console.log(error);
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
        console.log(products);
        return (
           <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="button" className="btn btn-info mb-10">
                    Thêm Sản Phẩm
                </button>
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