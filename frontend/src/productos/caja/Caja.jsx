import { React, useEffect, useState, useContext } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { getProducts } from "../requests";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { carContext } from "./carContext";
import { cloudinary_name } from "../../backendPath";
import "./Caja.css";

const Caja = () => {
  const value = useContext(carContext);
  const [carOpen, setCarOpen] = value.menu;
  const [carItems] = value.carItems;

  const tooglemenu = () => {
    setCarOpen(!carOpen);
  };
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const product = await getProducts();

      console.log(product);
      setProducts(product);
    }
    fetchProducts();
  }, []);
  const cld = new Cloudinary({
    cloud: {
      cloudName: cloudinary_name,
    },
  });

  const { addItemToCar } = useContext(carContext);
  return (
    <section className="menu_section">
      <link
        href="https://cdn.lineicons.com/3.0/lineicons.css"
        rel="stylesheet"
      ></link>
      <div className="cart" onClick={tooglemenu}>
        <i className="lni lni-cart"></i>
        <span className="cantidad">{carItems.length}</span>
      </div>
        {products.map((menuItem) => {
          const { id, name, cloudinary_id, price } = menuItem;
          const image = cld.image(`${cloudinary_id}.jpg`);
          return (
            <Card sx={{ maxWidth: 345 }} key={id} onClick={() => addItemToCar(menuItem)} className="menu-item">
          <CardActionArea>
                <AdvancedImage height="140" cldImg={image} className="photo" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {"Precio $: "+ price}
                </Typography>
              </CardContent>
          </CardActionArea>   
        </Card>
          );
        })}
        <div id="Espacio"></div>
    </section>
    
  );
  };
  
  export default Caja;
