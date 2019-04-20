import React, { Component } from 'react';
import apiCaller from './../../utils/apiCaller';
class ProductActionPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:'',
      txtName: '',
      txtPrice: '',
      chkbStatus: ''
    }
  }
  componentDidMount(){
    var {match} = this.props;
    if(match) {
      var id = match.params.id;
      apiCaller(`products/${id}`,'GET',null).then(respon=>{
        var {id, name, price, status} = respon.data;
        this.setState({
          id: id,
          txtName: name,
          txtPrice: price,
          chkbStatus: status
        });
      });
    }
  };
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]:value
    })
  }
  onSave = (event) => {
    event.preventDefault();
    var {history} = this.props;
    var {id, txtName, txtPrice, chkbStatus} = this.state;
    if(id) {
      apiCaller(`products/${id}`,'PUT',{
        id: id,
        name: txtName,
        price: txtPrice,
        status: chkbStatus
      }).then(respon => {
        history.goBack();
      });
    }else {
      apiCaller('products','POST',{
        name: txtName,
        price: txtPrice,
        status: chkbStatus
      }).then(respon=>{
        history.goBack();
      });
    }
  };
  render() {
    var {txtName, txtPrice, chkbStatus} = this.state;
    return (
      <form onSubmit={this.onSave}>
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            className="form-control" 
            name="txtName" 
            value={txtName}
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input 
            type="text" 
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
              checked={chkbStatus} 
              name="chkbStatus"
              onChange={this.onChange}
            /> Còn hàng
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Lưu lại</button>
      </form>
    );
  };
};
export default ProductActionPage;