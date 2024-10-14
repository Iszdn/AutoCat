import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./index.scss";

const OurProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Здесь можно сделать запрос для получения данных о продуктах
    const fetchProducts = async () => {
      const data = [
        {
          _id: 1,
          title: "Premium Cat Food",
          price: 0.65,
          imageUrl: "https://bazarstore.az/cdn/shop/products/30162737_ed1da0bb-75df-4278-ac2b-9c0110870b98_767x1000.jpg?v=1693509656",
          description: "Yüksək keyfiyyətli pişik yemi, gündəlik qidalanma üçün idealdır."
        },
        {
          _id: 2,
          title: "Organic Fish Cat Treats",
          price: 0.60,
          imageUrl: "https://fraulen.ru/img/catalog/c365964.jpg",
          description: "Organik balıqdan hazırlanmış sağlam pişik yemi."
        },
        {
          _id: 3,
          title: "Grain-Free Cat Food",
          price: 0.50,
          imageUrl: "https://biopet.az/resized/resize317/center/products/3917/ezgifcom-webp-to-jpg-converter-9.jpg",
          description: "Taxılsız pişik yeməyi, həssas pişiklər üçün."
        }
      ];
      setProducts(data);
    };
    
    fetchProducts();
  }, []);

  return (
    <section id='products'>
      <div className="header">
        <h3>Populyar Pişik Yeməkləri</h3>
        <p>Evsiz pişiklər üçün qida aparatlarımıza uyğun məhsullar.</p>
      </div>
      <div className="container">
        <div className="row">
          {products.map(product => (
            <div className='col-lg-4 col-md-6 col-12' key={product._id}>            
            <div className='card-prod'  key={product._id}>
              <div className="img">
                <img src={product.imageUrl} alt={product.title} />
              </div>
              <div className="content-cat">
                <h3><Link to={`/products/${product._id}`}>{product.title}</Link></h3>
                <p>{product.description}</p>
                <p>{product.price} AZN</p>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProduct;
