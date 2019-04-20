import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class ProductItem extends Component {
    onDelete = (id) => {
        if(confirm("Bạn chắc chắn muốn xoá?")) {//eslint-disable-line
            this.props.onDelete(id);
        }
    }
    render() {
        var {product,index} = this.props;
        var showStatus = product.status ? 'Còn hàng' : 'Hết hàng';
        var classStatus = product.status ? 'primary' : 'warning';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`badge badge-${classStatus}`}>{showStatus}</span>
                </td>
                <td>
                    <Link 
                        className="badge badge-primary mr-1"
                        to={`product/${product.id}/edit`}
                    >Sửa</Link>
                    <span 
                        className="badge badge-danger"
                        onClick={()=>this.onDelete(product.id)}
                    >Xoá</span>
                </td>
            </tr>
        );
    }
}
export default ProductItem;