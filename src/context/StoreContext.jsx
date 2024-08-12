import { createContext, useState, useEffect } from "react";
import { menu_list, all_menu } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const url = import.meta.env.VITE_API_URL;
  const [token, setToken] = useState("");
  const [menuList, setMenuList] = useState([]);
  const [allMenu, setAllMenu] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [orders, setOrders] = useState({});

  const navigate = useNavigate();

  // Validate User
  const validateUser = () => {
    if (!token) {
      toast.error("Silahkan login terlebih dahulu!");
      navigate("/login");
    }
  };

  // Validate Admin
  const validateAdmin = () => {
    if (!localStorage.getItem("tokenAdmin")) {
      navigate("/");
    }
  };

  // Get Menu List
  const getMenuList = () => {
    setMenuList(menu_list);
  };

  // Get All Menu
  const getAllMenu = async () => {
    try {
      const response = await axios.get(`${url}/api/foodDrink/list`);
      if (response.data.success) {
        setAllMenu(response.data.data);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  // Get user orders
  const getOrders = async (token) => {
    const response = await axios.get(`${url}/api/order/userorder`, {
      headers: { token },
    });
    setOrders(response.data.data);
  };

  // Load cart data
  const loadCartData = async (token) => {
    const response = await axios.get(`${url}/api/cart/get`, {
      headers: { token },
    });
    setCartItems(response.data.cartData);
  };

  //   Add to Cart
  const addToCart = async (itemId) => {
    if (!token) {
      toast.error("Silahkan login terlebih dahulu!");
      navigate("/login");
    }
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      const response = await axios.post(
        `${url}/api/cart/add`,
        { itemId },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    }
  };

  //   Remove from Cart
  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      const response = await axios.post(
        `${url}/api/cart/remove`,
        { itemId },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.warning(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    }
  };

  // Is cart empty
  const isCartEmpty = Object.values(cartItems).every(
    (quantity) => quantity === 0
  );

  //   Get total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = allMenu.find((menu) => menu._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    async function loadData() {
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
      }
      getMenuList();
      await getAllMenu();
      await loadCartData(localStorage.getItem("token"));
      await getOrders(localStorage.getItem("token"));
    }
    loadData();
  }, []);

  const contextValue = {
    validateUser,
    validateAdmin,
    url,
    menuList,
    allMenu,
    orders,
    getOrders,
    loadCartData,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    isCartEmpty,
    getTotalCartAmount,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
