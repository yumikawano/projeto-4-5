import { Layout } from "../../components/Layout";
import { getProducts } from "../../services/product";

export function ProductsView () {
    getProducts()
    return (
        <Layout>
        </Layout>
    )
}