import React, { Component } from 'react';
import ProductItem from './../ProductItem/ProductItem';
class ProductList extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">Danh sách các sản phẩm</div>
                    <div className="card-body">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Mã</th>
                                    <th>Tên</th>
                                    <th>Giá</th>
                                    <th>Trạng thái</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                <ProductItem></ProductItem>
                                <ProductItem></ProductItem>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default ProductList;