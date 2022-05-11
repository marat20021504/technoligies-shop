import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { Home } from "./containers/Home";
import Admin from "./containers/Login";
import ProductsDetails from "./containers/ProductsDetails";
import LoginRedirect from "./components/LoginRedirect";
import PrivateRoute from "./components/PrivateRoute";
import BagItems from "./containers/BagItems";
import CreateProducts from "./containers/CreateProducts"


function App() {
  return (
    <AppContainer>
		<Routes>
			<Route path="/login" element={<LoginRedirect><Admin /></LoginRedirect>} />
			<Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
			<Route path="/product/:id" element={<PrivateRoute><ProductsDetails /></PrivateRoute>} />
			<Route path="/products/create" element={<PrivateRoute><CreateProducts /></PrivateRoute>} />
			<Route path="/bag-item" element={<PrivateRoute><BagItems /></PrivateRoute>} />
		</Routes>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
	background: #EDEDED;
`