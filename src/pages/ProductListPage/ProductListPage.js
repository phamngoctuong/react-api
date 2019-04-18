import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';
import apiCaller from './../../utils/apiCaller';
import {actFetchProductsRequest} from './../../actions/index';
class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        this.props.fetchAllProducts();
    }
    findIndex = (products,id) => {
        var result = -1;
        products.forEach((product,index)=>{
            if(product.id === id) {
                result = index;
            }
        })
        return result;
    }
    onDelete = (id) => {
        var {products} = this.props;
        apiCaller(`products/${id}`,'DELETE',null).then(respon=>{
            if(respon.status === 200) {
                var index = this.findIndex(products,id);
                if(index !== -1) {
                    products.splice(index,1);
                    this.setState({
                        products
                    })
                }
            }
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
                        onDelete = {this.onDelete}
                    >
                    </ProductItem>  
                )
            })
        }
        return result;
    }
    render() {
        var {products} = this.props;
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
var mapDispatchToProps = (dispatch,props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductListPage);