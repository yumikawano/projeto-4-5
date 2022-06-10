import { Route, Routes as RDRoutes} from "react-router-dom";
import { HomeView } from "./views/Home";
import { QuemSomosView } from "./views/QuemSomos";
import { ContatoView } from "./views/Contato";
import { LoginView } from "./views/Login";
import { ProductsView } from "./views/Products";
import { NotFoundView } from "./views/NotFound";
import { RegisterView } from "./views/Register";
import { PrivateRoute } from "./components/PrivateRoute";
import { PublicOnlyRoute } from "./components/PublicOnlyRoute";
import { NewOrderView } from "./views/NewOrder";
import { NewOrderSuccessView } from "./views/NewOrderSuccess";


export function Routes () {
    return(
        <RDRoutes>
            <Route path="/" element={<HomeView />} /> 
            <Route path="/produtos" element={<ProductsView />} />
            <Route path="/sobre" element={<QuemSomosView />} />
            <Route path="/contato" element={<ContatoView />} />
            <Route path="/login" element={<PublicOnlyRoute><LoginView /></PublicOnlyRoute>} />
            <Route path="/cadastro" element={<RegisterView />} />
            <Route path="/novo-pedido" element={<PrivateRoute><NewOrderView /></PrivateRoute>} />
            <Route path="/novo-pedido/sucesso" element={<PrivateRoute><NewOrderSuccessView /></PrivateRoute>} />
            <Route path="*" element={<NotFoundView />} />
            {/* <Route path="/cart" element={<CartView />} /> */}
        </RDRoutes>
    )
}