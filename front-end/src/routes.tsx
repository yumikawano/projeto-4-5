import { Route, Routes as RDRoutes} from "react-router-dom";
import { HomeView } from "./views/Home";
import { QuemSomosView } from "./views/QuemSomos";
import { ContatoView } from "./views/Contato";
import { LoginView } from "./views/Login";

export function Routes () {
    return(
        <RDRoutes>
            <Route path="/" element={<HomeView />} /> 
            {/* <Route path="/produtos" element={<ProductsView />} /> */}
            // <Route path="/sobre" element={<QuemSomosView />} />
            <Route path="/contato" element={<ContatoView />} />
            <Route path="/login" element={<LoginView />} />
            {/* <Route path="/cart" element={<CartView />} /> */}
        </RDRoutes>
    )
}