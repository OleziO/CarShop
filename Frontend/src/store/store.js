import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./pageSlice";
import carListReducer from "./carsListSlice";
import carReducer from "./carSlice";
import newCarReducer from "./newCarsSlice";
import buyReducer from "./buySlice";
import orderReducer from "./orderSlice";
import orderListReduce from "./orderListSlice";
import userReducer from "./userSlice";
import adminPageReducer from "./adminPageSlice";

export default configureStore({
    reducer: {
        car: carReducer,
        newCar: newCarReducer,
        carList: carListReducer,
        page: pageReducer,
        buy: buyReducer,
        order: orderReducer,
        orderList: orderListReduce,
        user: userReducer,
        adminPage: adminPageReducer
    }
});