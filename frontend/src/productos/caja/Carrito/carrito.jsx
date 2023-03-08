import React from "react";
import { useContext } from "react";
import { carContext } from "../carContext";
import { AdvancedImage } from "@cloudinary/react";
import { cloudinary_name } from "../../../backendPath";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from "@cloudinary/url-gen";
import axios from "axios";
import URLBackend from "../../../backendPath";

export const Carrito = () => {
  const value = useContext(carContext);
  const [carOpen, setCarOpen] = value.menu;
  const [carItems, setCarItems] = value.carItems;

  const tooglefalse = () => {
    setCarOpen(false);
  };

  const show1 = carOpen ? "carritos show" : "carritos";
  const show2 = carOpen ? "carrito show" : "carrito";

  const resta = (id) => {
    carItems.forEach((item) => {
      if (item.id === id) {
        item.amount === 1 ? (item.amount = 1) : (item.amount -= 1);
      }
      setCarItems([...carItems]);
    });
  };
  const suma = (id) => {
    carItems.forEach((item) => {
      if (item.id === id) {
        item.amount += 1;
      }
      setCarItems([...carItems]);
    });
  };

  const total = carItems?.reduce(
    (previous, current) => previous + current.amount * current.price,
    0
  );

  const cld = new Cloudinary({
    cloud: {
      cloudName: cloudinary_name,
    },
  });
  const removeProduct = (id) => {
    carItems.forEach((item, index) => {
      if (item.id === id) {
        item.cantidad = 1;
        carItems.splice(index, 1);
      }
    });
    setCarItems([...carItems]);
  };
  const paidOrder = ()=>{
    console.log(carItems)
    console.log(total)
    const products = carItems.map(item => {
      
      return {"name":item.name,"quantity":item.amount}
    })
  const bodyRequest ={
      total,
      tip:0,
      products
  }
  axios
      .post(`${URLBackend}/invoice`, bodyRequest)
      .then((response) => {
        console.log(response);
        setCarItems([]);
      })
      .catch((res) => {
        console.log(res.response.data);
      });
  }
  return (
    <div className={show1}>
      <div className={show2}>
        <div className="carrito_close" onClick={tooglefalse}>
          <box-icon name="x"></box-icon>
        </div>
        <h2>Su carrito</h2>
        <div className="carrito_center">
          {carItems.map((product) => {
            const { id, name, price, cloudinary_id } = product;
            const image = cld
              .image(`${cloudinary_id}.jpg`)
              .resize(thumbnail().width(150).height(150));
            return (
              <div key={id} className="carrito_item">
                <AdvancedImage cldImg={image} className="image" />
                <div>
                  <h3>{name}</h3>
                  <p className="price">${price}</p>
                </div>
                <div>
                  <box-icon
                    name="up-arrow"
                    type="solid"
                    onClick={() => suma(id)}
                  ></box-icon>
                  <p className="cantidad_carito">{product.amount}</p>
                  <box-icon
                    name="down-arrow"
                    type="solid"
                    onClick={() => resta(id)}
                  ></box-icon>
                </div>
                <div className="remove_item" onClick={() => removeProduct(id)}>
                  <box-icon name="trash" type="solid"></box-icon>
                </div>
              </div>
            );
          })}
        </div>

        <div className="carrito_footer">
          <h3>Total:$ {total}</h3>
          <button onClick={() => paidOrder()} className="btn">Pagar</button>
        </div>
      </div>
    </div>
  );
};
