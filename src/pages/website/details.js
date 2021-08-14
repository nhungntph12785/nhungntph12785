import {useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { Link, Redirect } from 'react-router-dom';
import { signin } from '../../api/authAPI';
import { isAuthenticated, authenticate } from '../../auth';
import jwt from 'jsonwebtoken';
import {getId} from '../../api/productAPI'
const Details = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  console.log('avhd',props.data.id);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await getId(id);
        setProduct(data);
        console.log(product);
      } catch (error) {}
    };
    getProduct();
  }, []);
    
    return (
       
    <div>
    <hr />
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h2 className="h2">Quản lý sản phẩm</h2>
      <div className="btn-toolbar mb-2 mb-md-0">
        <Link to="/product/add" className="btn btn-sm btn-outline-primary">
          Thêm sản phẩm
        </Link>
      </div>
    </div>
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tên</th>
            <th scope="col">Giá</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {/* {props.data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td className="text-right">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => props.onRemove(item.id)}
                >
                  Delete
                </button>
                <Link
                  className="btn btn-primary btn-sm ms-1"
                  to={`/product/${item.id}/edit`}
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  </div>
    )
}

export default Details
