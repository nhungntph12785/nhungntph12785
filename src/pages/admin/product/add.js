import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { getAllCate } from "../../../api/categoryAPI";

const AddProductForm = (props) => {
  const [categories,setCategories] = useState([]);
const history = useHistory();
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
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    const newItem = {
      id: Math.random().toString(7).substring(5),
      ...data
    };
    console.log(newItem);

    props.onAdd(newItem);
    history.push('/admin/product')
  };
  return (
    <>
      {/* {JSON.stringify(controlValue)} */}
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">Quản lý sản phẩm</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên sản phẩm</label>
          <input
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
            type="number"
            className="form-control"
            {...register("price",{required:true})}
          />
        </div>
        <label className="form-label">Ảnh sản phẩm</label>
          <input
            type="text"
            className="form-control"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <span className="d-block mt-2 text-danger">
              Bắt buộc phải nhập trường này
            </span>
          )}
          <label className="form-label">Trạng thái</label>
        <div className="mb-3">
          <select className="form-control" {...register("status")}>
            <option value="0">Hết hàng</option>
            <option value="1">Còn hàng</option>
          </select>
        </div>
        <label className="form-label">Danh mục</label>
        <div className="mb-3">
          <select className="form-control" {...register("categoryId")}>
            {
              categories.map((item)=>(<option value={item.id}>{item.name}</option>))
            }
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Thêm sản phẩm
        </button>
      </form>
    </>
  );
};
export default AddProductForm;
