import { Route, Routes as RDRoutes} from "react-router-dom";
import { HomeView } from "./views/Home";
import { QuemSomosView } from "./views/QuemSomos";
import { ContatoView } from "./views/Contato";
import { LoginView } from "./views/Login";
import { ProductsView } from "./views/Products";
import { NotFoundView } from "./views/NotFound";
import { RegisterView } from "./views/Register";

export function Routes () {
    return(
        <RDRoutes>
            <Route path="/" element={<HomeView />} /> 
            <Route path="/produtos" element={<ProductsView />} />
            <Route path="/sobre" element={<QuemSomosView />} />
            <Route path="/contato" element={<ContatoView />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/cadastro" element={<RegisterView />} />
            <Route path="*" element={<NotFoundView />} />
            {/* <Route path="/cart" element={<CartView />} /> */}
        </RDRoutes>
    )
}