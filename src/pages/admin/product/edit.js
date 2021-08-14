import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import { getAllCate } from "../../../api/categoryAPI";
import { get } from "../../../api/productAPI";

const EditProductForm = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const [categories,setCategories] = useState([]);

  useEffect(() =>{
    const getCategory = async () => {
      try {
        const { data } = await getAllCate();
        setCategories(data);
        console.log(data);
        
      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
  }, []);
  const history = useHistory();

  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await get(id);
        setProduct(data);
        reset(data);
      } catch (error) {}
    };
    getProduct();
  }, []);

  const onSubmit = (data) => {
    const newItem = {
      id,
      ...data
    };
    console.log(newItem);
    props.onEdit(newItem);
    history.push("/admin/product");
  };
  return (
    <>
      {/* {JSON.stringify(product)} */}
      {/* {JSON.stringify(controlValue)} */}
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">Cập Nhật Sản Phẩm</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên sản phẩm</label>
          <input
           defaultValue={'name'}
            type="text"
            className="form-control"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="d-block mt-2 text-danger">
              Bắt buộc phải nhập trường này
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Giá sản phẩm</label>
          <input
          defaultValue={'price'}
            type="number"
            className="form-control"
            {...register("price")}
          />
        </div>
        <label className="form-label">Ảnh sản phẩm</label>
          <input
          defaultValue={product.image}
            type="text"
            className="form-control"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <span className="d-block mt-2 text-danger">
              Bắt buộc phải nhập trường này
            </span>
          )}
        <div className="mb-3">
          <select defaultValue={'status'} className="form-control" {...register("status")}>
            
            <option value="0">Hết hàng</option>
            <option value="1">Còn hàng</option>
          </select>
        </div>
        <div className="mb-3">
          <select defaultValue={'categoryId'} className="form-control" {...register("categoryId")}>
            
            {
              categories.map((item)=>(<option value="item.id">{item.name}</option>))
            }
          </select>
        </div>
        

        <button type="submit" className="btn btn-primary">
          Sửa sản phẩm
        </button>
      </form>
    </>
  );
};
export default EditProductForm;
