import React, { useEffect, useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { cloudinary_name } from "../../backendPath";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./index.css";

const cld = new Cloudinary({
  cloud: {
    cloudName: cloudinary_name,
  },
});

const Products = ({ items, category }) => {
  const [showItems, setShowItems] = useState(items);

  useEffect(() => {
    if (category === "Todo") {
      setShowItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setShowItems(newItems);
  }, [category, items]);

  return (
    <div className="section-center">

    {showItems.map((menuItem) => {
      const { id, name, cloudinary_id, price} = menuItem;
      const image = cld.image(`${cloudinary_id}.jpg`);
      return (

        <Card sx={{ maxWidth: 345 }} key={id} className="menu-item">
          <CardActionArea>
                <AdvancedImage cldImg={image} className="photo" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {"Precio$: "+price}
                </Typography>
              </CardContent>
          </CardActionArea>   
        </Card>
      );
   })}
    </div>
  );
}
export default Products;
