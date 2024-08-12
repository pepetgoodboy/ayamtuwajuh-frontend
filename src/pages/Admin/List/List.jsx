import React, { useContext, useState, useEffect } from "react";
import AdminLayout from "../../../layouts/AdminLayout/AdminLayout";
import { StoreContext } from "../../../context/StoreContext";
import { toast } from "react-toastify";
import axios from "axios";
import CurrencyIDR from "../../../composables/CurrencyIDR/CurrencyIDR";
import Spinner from "react-spinner-material";

const List = () => {
  const { url, validateAdmin } = useContext(StoreContext);
  const [listMenu, setListMenu] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);

  const fetchListMenu = async () => {
    setPageLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    try {
      const response = await axios.get(`${url}/api/foodDrink/list`);
      setListMenu(response.data.data);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setPageLoading(false);
    }
  };

  const handleDeleteFoodDrink = async (id) => {
    try {
      const response = await axios.post(`${url}/api/foodDrink/remove`, {
        id: id,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        fetchListMenu();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    validateAdmin();
    fetchListMenu();
  }, []);

  return (
    <AdminLayout>
      <div className="w-[70%] ml-4 md:ml-20 mt-8 md:mt-12 pb-10 text-[#6d6d6d] text-sm md:text-base">
        <h2 className="font-semibold mb-5">List Menu</h2>
        {pageLoading ? (
          <div className="flex justify-center items-center h-[65%]">
            <Spinner stroke={3} radius={30} color="#ea580c" visible={true} />
          </div>
        ) : (
          <div className="border border-neutral-200 rounded-lg overflow-auto">
            <table className="min-w-full divide-y divide-neutral-200">
              <thead className="bg-primary">
                <tr className="text-[#6d6d6d]">
                  <th scope="col" className="px-6 py-3 text-start text-sm">
                    Gambar
                  </th>
                  <th scope="col" className="px-6 py-3 text-start text-sm">
                    Nama
                  </th>
                  <th scope="col" className="px-6 py-3 text-start text-sm">
                    Kategori
                  </th>
                  <th scope="col" className="px-6 py-3 text-start text-sm">
                    Harga
                  </th>
                  <th scope="col" className="px-6 py-3 text-start text-sm">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white">
                {listMenu.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                      <img
                        src={`${url}/images/${item.image}`}
                        alt="List Menu"
                        className="w-14 h-12 md:w-16 md:h-14 rounded-md"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm ">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm ">
                      {item.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm ">
                      {CurrencyIDR(item.price)}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm">
                      <div className="flex gap-2 items-center cursor-pointer">
                        <p
                          onClick={() => handleDeleteFoodDrink(item._id)}
                          className="font-medium"
                        >
                          Delete
                        </p>
                      </div>
                    </td>
                  </tr>
                ))}
                {listMenu.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center"
                    >
                      Tidak ada Menu
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default List;
