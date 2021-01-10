import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { fetchProducts, saveOrder } from '../api';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import { OrderLocationData, Product } from './types';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import React from 'react';
import Footer from '../Footer';
import { checkIsSelected } from './helpers';
import './styles.css';

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
  const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price;
  }, 0);


  useEffect(() =>{
    fetchProducts()
    .then(Response => setProducts(Response.data))
    .catch(error => console.log(error));
  }, []);

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
  
    saveOrder(payload).then((response) => {
      toast.error(`Pedido enviado com sucesso!' N° ${response.data.id}`);
      setSelectedProducts([]);
    })
      .catch(() => {
        toast.warning('Erro ao enviar pedido');
      })
  }

    return (
       <>
        <div className="orders-container">
          <StepsHeader />
          <ProductsList products={products}
          onselectProduct={handleSelectProduct}
          selectedProducts={selectedProducts}
          />
          <OrderLocation onChangeLocation={location => setOrderLocation(location)}
         />
          <OrderSummary amount={selectedProducts.length} 
          totalPrice={totalPrice} 
          onSubmit={handleSubmit}
          />
        </div>
        <Footer />
       </>
    )
}

export default Orders;