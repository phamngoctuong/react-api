import React, { Component } from 'react';
class ProductItem extends Component {
    render() {
        return (
            <tr>
                <td>1</td>
                <td>abc</td>
                <td>Iphone 5 Plus</td>
                <td>500</td>
                <td>
                    <span className="badge badge-danger">Hết hàng</span>
                </td>
                <td>
                    <span className="badge badge-primary mr-1">Sửa</span>
                    <span className="badge badge-danger">Xoá</span>
                </td>
            </tr>
        );
    }
}
export default ProductItem;