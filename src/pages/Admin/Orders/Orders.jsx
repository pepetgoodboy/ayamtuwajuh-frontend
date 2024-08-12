import React, { useContext, useEffect, useState } from "react";
import AdminLayout from "../../../layouts/AdminLayout/AdminLayout";
import Parcel from "../../../assets/parcel_icon.png";
import { StoreContext } from "../../../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";
import CurrencyIDR from "../../../composables/CurrencyIDR/CurrencyIDR";
import Spinner from "react-spinner-material";

const Orders = () => {
  const { url, validateAdmin } = useContext(StoreContext);

  const [orders, setOrders] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);

  const fetchOrders = async () => {
    setPageLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    try {
      const response = await axios.get(`${url}/api/order/all`);
      if (response.data.success) {
        setOrders(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setPageLoading(false);
    }
  };

  const handleUpdateOrder = async (event, orderId) => {
    const response = await axios.patch(`${url}/api/order/status`, {
      orderId,
      status: event.target.value,
    });
    if (response.data.success) {
      toast.success(response.data.message);
      await fetchOrders();
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    validateAdmin();
    fetchOrders();
  }, []);

  return (
    <AdminLayout>
      <div className="w-[70%] ml-4 md:ml-20 mt-8 md:mt-12 text-[#6d6d6d] text-sm md:text-base">
        <h2 className="font-semibold mb-5">Semua Pesanan</h2>
        {pageLoading ? (
          <div className="flex justify-center items-center h-[65%]">
            <Spinner stroke={3} radius={30} color="#ea580c" visible={true} />
          </div>
        ) : (
          <div className="border border-neutral-200 rounded-lg overflow-auto">
            <table className="min-w-full divide-y divide-neutral-200">
              <thead className="bg-primary">
                <tr className="text-[#6d6d6d]">
                  <th scope="col" className="px-6 py-3 text-center text-sm">
                    Item
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-sm">
                    Nama
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-sm">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-sm">
                    Jumlah
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-sm">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white">
                {orders.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex justify-center">
                      <img
                        src={Parcel}
                        alt="parcel"
                        className="w-14 md:w-16 rounded-md"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center ">
                      <div className="flex flex-col justify-center">
                        {item.items.map((foodDrink, foodDrinkIndex) => (
                          <p key={foodDrinkIndex} className="mb-1">
                            {foodDrink.name} x {foodDrink.qty}
                          </p>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center ">
                      {CurrencyIDR(item.amount)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center ">
                      {item.items.length}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      <select
                        onChange={(event) => handleUpdateOrder(event, item._id)}
                        value={item.status}
                        className="text-sm px-4 py-2"
                      >
                        <option value="Dalam Proses">Dalam Proses</option>
                        <option value="Dalam Perjalanan">
                          Dalam Perjalanan
                        </option>
                        <option value="Selesai">Selesai</option>
                      </select>
                    </td>
                  </tr>
                ))}
                {orders.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center"
                    >
                      Tidak ada pesanan
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

export default Orders;
