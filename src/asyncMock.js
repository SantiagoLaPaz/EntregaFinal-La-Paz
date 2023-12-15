const product = {
    id: 1,
    name: 'Producto de ejemplo',
    price: 19.99,
    img: 'https://articulo.mercadolibre.com.uy/MLU-608435060-angulo-de-aluminio-12x12mm-_JM?matt_tool=78387390&matt_word=&matt_source=google&matt_campaign_id=14683052356&matt_ad_group_id=152769168133&matt_match_type=&matt_network=g&matt_device=c&matt_creative=671793314618&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=747477366&matt_product_id=MLU608435060&matt_product_partition_id=2186444635886&matt_target_id=pla-2186444635886&gad_source=1&gclid=Cj0KCQiA7OqrBhD9ARIsAK3UXh2TjcgqlxqaZOOnnP8o1hn2IdtPW4LYOWJVhpzlUkwlooU65XBhFewaAgawEALw_wcB'
  };
  
  
  const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([product]);
      }, 1000); 
    });
  };
  
  export { product, getProducts };
  