import { createContext, useState, useEffect } from "react";
import { menu_list } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const url = import.meta.env.VITE_API_URL;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [menuList, setMenuList] = useState([]);
  const [allMenu, setAllMenu] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [orders, setOrders] = useState({});

  const navigate = useNavigate();

  // Configure axios defaults
  axios.defaults.withCredentials = true;

  // Check auth status
  const checkAuthStatus = async () => {
    try {
      const response = await axios.get(`${url}/api/user/check-auth`);
      setIsAuthenticated(response.data.success);
      setUserRole(response.data.role);
      return response.data.success;
    } catch (error) {
      setIsAuthenticated(false);
      setUserRole(null);
      return false;
    }
  };

  // Validate User
  const validateUser = async () => {
    const isAuth = await checkAuthStatus();
    if (!isAuth) {
      toast.error("Silahkan login terlebih dahulu!");
      navigate("/login");
    }
  };

  // Validate Admin
  const validateAdmin = async () => {
    const isAuth = await checkAuthStatus();
    if (!isAuth && userRole !== "admin") {
      navigate("/");
    }
  };

  // Logout handler
  const handleLogout = async () => {
    try {
      const response = await axios.post(`${url}/api/user/logout`);
      if (!response) {
        toast.error(response.message);
        return;
      }
      setIsAuthenticated(false);
      setUserRole(null);
      setCartItems({});
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data.message);
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
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  // Get user orders
  const getOrders = async () => {
    try {
      const response = await axios.get(`${url}/api/order/userorder`);
      setOrders(response.data.data);
    } catch (error) {
      console.log(error.response?.data.message);
    }
  };

  // Load cart data
  const loadCartData = async () => {
    try {
      const response = await axios.get(`${url}/api/cart/get`);
      setCartItems(response.data.cartData);
    } catch (error) {
      console.log(error.response?.data.message);
    }
  };

  //   Add to Cart
  const addToCart = async (itemId) => {
    if (!isAuthenticated) {
      toast.error("Silahkan login terlebih dahulu!");
      navigate("/login");
      return;
    }

    try {
      if (!cartItems[itemId]) {
        setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
      } else {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      }

      const response = await axios.post(`${url}/api/cart/add`, { itemId });
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data.message);
    }
  };

  //   Remove from Cart
  const removeFromCart = async (itemId) => {
    try {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
      const response = await axios.post(`${url}/api/cart/remove`, { itemId });
      if (response.data.success) {
        toast.success(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data.message);
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
      const isAuth = await checkAuthStatus();
      if (isAuth) {
        await loadCartData();
        await getOrders();
      }
      getMenuList();
      await getAllMenu();
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
    isAuthenticated,
    setIsAuthenticated,
    userRole,
    setUserRole,
    handleLogout,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
