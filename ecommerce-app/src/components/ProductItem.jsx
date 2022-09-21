import { React, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Quantity from "./Quantity";

const ProductItem = ({ product, onIncrement, onDecrement, addedItems }) => {
  const [isBuy, setIsBuy] = useState(true);

  const [isReadMore, setIsReadMore] = useState(true);

  const handleIsReadMore = () => {
    setIsReadMore(!isReadMore);
    console.log(isReadMore);
  };
  const handleIsBuy = () => {
    setIsBuy(false);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={product.imageUrl} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {isReadMore && product.description.length > 200
            ? `${product.description.substring(0, 150)}`
            : product.description}
          {product.description.length > 200 && (
            <Button onClick={handleIsReadMore}>
              {isReadMore ? "Read More" : "Read Less"}
            </Button>
          )}
          {/* {isReadMore
            ? `${product.description.substring(0, 150)}...`
            : product.description}
          <Button onClick={handleIsReadMore}>
            {isReadMore ? "Read More" : "Read Less"}
          </Button> */}
        </Typography>
      </CardContent>
      <CardActions>
        {isBuy ? (
          <Button
            size="large"
            variants="contained"
            color="primary"
            onClick={handleIsBuy}
          >
            Buy
          </Button>
        ) : (
          <Quantity
            product={product}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            addedItems={addedItems}
          ></Quantity>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductItem;
