import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item active">
                      <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link">Quản lý sản phẩm</a>
                  </li>
              </ul>
          </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <button type="button" className="btn btn-default">Thêm sản phẩm</button>
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
                    <tr>
                      <td>2</td>
                      <td>abc</td>
                      <td>Iphone 6 Plus</td>
                      <td>500</td>
                      <td>
                        <span className="badge badge-success">Còn hàng</span>
                      </td>
                      <td>
                        <span className="badge badge-primary mr-1">Sửa</span>
                        <span className="badge badge-danger">Xoá</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div> 
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
