import React, { Component } from 'react';
import apiCaller from './../../utils/apiCaller';
class ProductActionPage extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: ''
        }
    };
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked: target.value;
        this.setState({
            [name]: value
        });
    };
    onSave = (event) => {
        event.preventDefault();
        var {txtName, txtPrice, chkbStatus} = this.state;
        apiCaller('products','POST',{
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }).then(respon => {
            console.log(respon);
        });
    }
    render() {
        var {txtName, txtPrice, chkbStatus} = this.state;
        return (
           <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form role="form" onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Tên sản phẩm</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="txtName"
                            value={txtName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Giá:</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            name="txtPrice"
                            value={txtPrice}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="checkbox">
                        <label>
                            <input 
                                type="checkbox" 
                                value={chkbStatus} 
                                name="chkbStatus"
                                onChange={this.onChange}
                            /> Còn hàng
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Lưu lại</button>
                </form>
           </div>
        );
    }
}
export default ProductActionPage;