import { checkIsSelected } from "./helpers";
import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props = {
    products: Product[];
    selectedProducts: Product[];
    onselectProduct: (product: Product) => void;

}

function ProductsList({ products, selectedProducts, onselectProduct }: Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-itens">
                {products.map(product => (
                    <ProductCard key={product.id}
                        product={product}
                        onselectProduct={onselectProduct}
                        isSelected={checkIsSelected(selectedProducts, product)}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductsList;