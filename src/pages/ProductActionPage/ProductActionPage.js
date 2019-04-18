import React, { Component } from 'react';
import apiCaller from './../../utils/apiCaller';
import {Link} from 'react-router-dom';
import {actAddProductRequest, actGetProductRequest} from './../../actions/index';
import {connect} from 'react-redux';
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
        var {id, txtName, txtPrice, chkbStatus} = this.state;
        var {history} = this.props;
        var product = {
            id:id,
            name:txtName,
            price: txtPrice,
            status: chkbStatus
        };
        if(id) {
            apiCaller(`products/${id}`,'PUT',{
                name: txtName,
                price: txtPrice,
                status: chkbStatus
            }).then(respon => {
                history.goBack();
            });
        }else{
            this.props.ondAddProduct(product);
            history.goBack();
        }
    };
    componentDidMount(){
        var {match} = this.props;
        if(match){
            var id = match.params.id;
            this.props.onEditProduct(id);
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditing){
            var {itemEditing} = nextProps;
            this.setState({
                id : itemEditing.id,
                txtName : itemEditing.name,
                txtPrice : itemEditing.price,
                chkbStatus : itemEditing.status
            });
        }
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
                                checked={chkbStatus}
                            /> Còn hàng
                        </label>
                    </div>
                    <Link to="/product-list" className="btn btn-success mr-1">Trở lại</Link>
                    <button type="submit" className="btn btn-primary">Lưu lại</button>
                </form>
           </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        itemEditing : state.itemEditing
    }
}
var mapDispatchToProps = (dispatch,props) => {
    return {
        ondAddProduct: (product) => {
            dispatch(actAddProductRequest(product));
        },
        onEditProduct: (id) => {
            dispatch(actGetProductRequest(id));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductActionPage);