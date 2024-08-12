import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../../layouts/AdminLayout/AdminLayout";
import Upload from "../../../assets/upload_area.png";
import { StoreContext } from "../../../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";
import Spinner from "react-spinner-material";

const Add = () => {
  const { url, validateAdmin } = useContext(StoreContext);
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Makanan",
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleAddItem = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    try {
      const response = await axios.post(`${url}/api/foodDrink/add`, formData);
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Makanan",
        });
        setImage(false);
        toast.success(response.data.message);
        navigate("/admin/list");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    validateAdmin();
  }, []);

  return (
    <AdminLayout>
      <div className="w-[70%] ml-4 md:ml-20 mt-8 md:mt-12 text-[#6d6d6d] text-sm md:text-base">
        <form id="add" onSubmit={handleAddItem} className="flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            <p className="text-back font-semibold">Gambar Item</p>
            <label htmlFor="image">
              <img
                src={image ? URL.createObjectURL(image) : Upload}
                alt="upload"
                className="w-28 rounded-md"
              />
            </label>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              autoComplete="off"
              type="file"
              id="image"
              hidden
              required
              className="border border-neutral-300 px-2 py-1 w-72 md:w-96"
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-back font-semibold">Item Name</p>
            <input
              onChange={onChangeHandler}
              autoComplete="off"
              value={data.name}
              type="text"
              name="name"
              placeholder="Ayam Bakar"
              required
              className="border border-neutral-300 rounded-md px-2 py-1 w-72 md:w-96"
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-back font-semibold">Deskripsi Item</p>
            <textarea
              onChange={onChangeHandler}
              autoComplete="off"
              value={data.description}
              name="description"
              rows={6}
              placeholder="Tulis deskripsi disini"
              required
              className="border border-neutral-300 rounded-se-md px-2 py-1 w-72 md:w-96"
            ></textarea>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col gap-3">
              <p className="text-back font-semibold">Kategori Item</p>
              <select
                onChange={onChangeHandler}
                name="category"
                required
                className="border border-neutral-300 bg-white rounded-md px-2 py-1"
              >
                <option value="Makanan">Makanan</option>
                <option value="Minuman">Minuman</option>
              </select>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-back font-semibold">Harga</p>
              <input
                onChange={onChangeHandler}
                autoComplete="off"
                value={data.price}
                type="number"
                name="price"
                placeholder="Rp. 20.000"
                required
                className="border border-neutral-300 rounded-md px-2 py-1 w-28 md:w-56"
              />
            </div>
          </div>
          <button
            className="flex justify-center items-center bg-orange-500 hover:bg-orange-600 mt-6 text-white rounded-md font-semibold py-2 w-72 md:w-96"
            type="submit"
          >
            {isLoading ? (
              <Spinner
                radius={20}
                color={"#ffffff"}
                stroke={2}
                visible={true}
              />
            ) : (
              "Tambah Item"
            )}
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default Add;
