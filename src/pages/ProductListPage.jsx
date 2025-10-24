import React from 'react';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

const ProductListPage = () => {
  const plants = [
    { id: 1, name: 'Snake Plant', price: 15, category: 'Indoor', image: 'https://a-z-animals.com/media/2022/11/shutterstock_2094969181.jpg' },
    { id: 2, name: 'Peace Lily', price: 18, category: 'Flowering', image: 'https://thumbs.dreamstime.com/b/peace-lily-speckled-white-pot-background-376849852.jpg' },
    { id: 3, name: 'Cactus', price: 10, category: 'Succulent', image: 'https://img.freepik.com/premium-photo/cactus-pot-isolated-white-background_945053-1636.jpg' },
    { id: 4, name: 'Aloe Vera', price: 12, category: 'Succulent', image: 'https://img.freepik.com/premium-photo/aloe-vera-plant-white-pot-isolated-white-background_908985-97709.jpg' },
    { id: 5, name: 'ZZ Plant', price: 20, category: 'Indoor', image: 'https://www.mydomaine.com/thmb/5y6oAJG3NHfeHUb7EurxQX5papY=/2121x0/filters:no_upscale():strip_icc()/zz-plant-pot-f34da789c4c14ef7a247ebafcff7e9c3.jpg' },
    { id: 6, name: 'Orchid', price: 22, category: 'Flowering', image: 'https://static.vecteezy.com/system/resources/previews/029/860/982/non_2x/of-orchid-flower-in-pot-isolated-on-white-background-generative-ai-photo.jpg' },
    { id: 7, name: 'Philodendron', price: 25, category: 'Indoor', image: 'https://thumbs.dreamstime.com/b/philodendron-white-pot-background-generative-ai-277446542.jpg' },
    { id: 8, name: 'Echeveria', price: 14, category: 'Succulent', image: 'https://thumbs.dreamstime.com/b/echeveria-setosa-pot-white-background-top-view-209198094.jpg' },
    { id: 9, name: 'Anthurium', price: 20, category: 'Flowering', image: 'https://img.freepik.com/premium-photo/anthurium-white-flowerpot-isolated-white-background_1108314-163915.jpg' },
  ];

  const categories = [
    {
      name: 'Indoor',
      subtitle: 'Perfect for your home and office spaces. Fresh air and natural beauty indoors.',
    },
    {
      name: 'Succulent',
      subtitle: 'Low-maintenance and stylish plants that thrive in sunlight and minimal care.',
    },
    {
      name: 'Flowering',
      subtitle: 'Brighten your room with colorful and fragrant blooms all year round.',
    },
  ];

  return (
    <div>
      <Header />
      {categories.map(cat => (
        <section key={cat.name} style={{ marginBottom: '50px' }}>
          <h2 style={{ textAlign: 'center', color: '#3d7c47' }}>{cat.name}</h2>
          <p
            style={{
              color: '#666',
              marginTop: '-5px',
              marginBottom: '20px',
              textAlign: 'center',
              fontStyle: 'italic',
              fontSize: '15px',
            }}
          >
            {cat.subtitle}
          </p>
          <div className="product-grid">
            {plants
              .filter(p => p.category === cat.name)
              .map(p => (
                <ProductCard key={p.id} plant={p} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductListPage;
