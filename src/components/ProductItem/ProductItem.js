import React, { Component } from 'react';
class ProductItem extends Component {
    onDelete = (id) => {
        if(confirm('Bạn chắc chắn muốn xoá?')) {//eslint-disable-line
            this.props.onDelete(id);
        }
    };
    render() {
        var {product, index} = this.props;
        var statusName = product.status ? 'Còn hàng' : 'Hết hàng';
        var statusClass = product.status ? 'success' : 'warning';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`badger badge-${statusClass}`}>{statusName}</span>
                </td>
                <td>
                    <span className="badge badge-primary mr-1">Sửa</span>
                    <span 
                        className="badge badge-danger"
                        onClick = {()=>this.onDelete(product.id)}
                    >Xoá</span>
                </td>
            </tr>
        );
    }
}
export default ProductItem;