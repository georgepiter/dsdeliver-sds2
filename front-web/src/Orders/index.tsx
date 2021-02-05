import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { fetchProducts, saveOrder } from '../api';
import Footer from '../Footer';
import Loading from '../Loading/Loading';
import { checkIsSelected } from './helpers';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { OrderLocationData, Product } from './types';


function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
  const [done, setDone] = useState(false);
  const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price;
  }, 0);


  useEffect(() => {
    setTimeout(() => {
      fetchProducts()
        .then(response => { setProducts(response.data); setDone(true); })
        .catch(error => { toast.warning("Error ao carregar os dados do servidor, favor atualize a pagina." + error); })
    }, 1200);
  }, [])

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product);

    if (isAlreadySelected) {
      const selected = selectedProducts.filter(item => item.id !== product.id);
      setSelectedProducts(selected);
    } else {
      setSelectedProducts(previous => [...previous, product]);
    }
  }

  const handleSubmit = () => {
    const productsIds = selectedProducts.map(({ id }) => ({ id }));
    const payload = {
      ...orderLocation!,
      products: productsIds
    }

    if (payload.products.length > 0) {
      if (payload.address) {
        saveOrder(payload).then((response) => {
          toast.error(`Pedido enviado com sucesso!' N° ${response.data.id}`);
          setSelectedProducts([]);
        })
          .catch(() => {
            toast.warning('Erro ao enviar pedido');
          })
      } else { toast.warning('È necessário selecionar um endereço para a entrega'); }
    } else { toast.warning('Selecione um produto'); }
  }

  return (
    <>
      <div className="orders-container">
        <StepsHeader />
        <div>
          {!done ? (<Loading />) : (
            <>
              <ProductsList products={products}
                onselectProduct={handleSelectProduct}
                selectedProducts={selectedProducts} />
              <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
              <OrderSummary amount={selectedProducts.length}
                totalPrice={totalPrice}
                onSubmit={handleSubmit} />
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Orders;