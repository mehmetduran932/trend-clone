import React, { useEffect, useState } from "react";
import "../App.css";
import {
  Box,
  Flex,
  Divider,
  Stack,
  Image,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  ButtonGroup,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MemoBox from "./MemoBox";
import SmallSrc from "./SmallSrc";
import InsuranceBox from "./InsuranceBox";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import { products } from "../api/product";
import AddToCartError from "./AddToCartError";

function TitleBox({ id, name, mark, price, detail, memo, carts, addToCart }) {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);
  const [addErr, setAddErr] = useState(false);

  const addCart = () => {
    if (count < 3) {
      addToCart(product);
      setCount(count + 1);
      setAddErr(false);
    } else {
      console.log("3ten fazla ürün ekleyemezsiniz");
      setAddErr(true); 
      setTimeout(function(){ setAddErr(false); }, 3000);
     
    }
  };

  useEffect(() => {
    let currentProduct = products.find((item) => item.id == id);
    setProduct(currentProduct);
  }, [product]);

  return (
    <div className="title-box">
      <Box>
        <p>
          <a className="title-box-alti-cizili" href="https://www.trendyol.com/">
            {mark}
          </a>{" "}
          {name}
        </p>
        <p>{detail}</p>
        <label className="title-box-alti-cizili">Satıcı:</label>
        <a href="https://www.trendyol.com/">Trendyol</a>
        <h3>Buraya Yıldız Değerlendirme Box'ı gelecek</h3>
        <Flex>
          <Box p="2" w="100px" h="100px" bg="white.400">
            <div>
              <p className="ustu-cizili">6.000,00 TL</p>
              <p className="fiyat-renk">{price}-TL</p>
            </div>
          </Box>
          <Stack direction="row" h="100px" p={1}>
            <Divider orientation="vertical" />
          </Stack>
          <Box p="2" w="200px" h="100px" bg="white.400">
            <div>
              <p className="fiyat-indirim">Sepette %6 İndirim</p>
              <p className="indirimli-fiyat">4.662,40 TL</p>
            </div>
          </Box>
        </Flex>
        <div className="img-box">
          <Image
            className="yan-yana"
            boxSize="20px"
            src="https://cdn.dsmcdn.com/web/pdp/wallet-rebate.png"
            alt="cüzdan"
          />
          <h6>Cüzdanla öde 46.62 TL geri kazan!</h6>
        </div>
      </Box>
      <Stack direction="row" h="100px" p={4}>
        <Divider orientation="horizontal" />
      </Stack>
      <div className="dahili-hafiza">
        <h3>Dahili Hafıza</h3>
      </div>
      {memo.map((p) => {
        return (
          <div className="yasla-hafiza">
            <MemoBox memo={p} />
          </div>
        );
      })}
      <div className="renk-stil">
        <h3>Renk</h3>
      </div>
      <div>
        <SmallSrc />
      </div>
      <InsuranceBox />
      <div className="sepete-ekle yasla-btn">
        <Popover>
          <PopoverTrigger>
            <Button
              colorScheme="orange"
              size="lg"
              height="50px"
              width="550px"
              onClick={() => addCart(product)}
            >
              Sepete Ekle
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Ürün Sepetinize Eklendi...</PopoverHeader>
            <PopoverBody>Ürün Eklendi...</PopoverBody>
            <PopoverFooter d="flex" justifyContent="flex-end">
              <ButtonGroup size="sm">
                <Link to="/">
                  <Button variant="outline">Alışverişe devam et...</Button>
                </Link>
                <Link to="/CartDetail">
                  <Button colorScheme="red">Sepete Git...</Button>
                </Link>
              </ButtonGroup>
            </PopoverFooter>
          </PopoverContent>
        </Popover>

        <Button className="btn-sağ" height="50px" width="40px">
          Kalp
        </Button>
        <div>{addErr && <AddToCartError />}</div>
      </div>
      
      <div className="txt-margin">
        <p>Tahmini Kargoya Teslim: 6 gün içinde</p>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    carts: state.cart,
  };
}
export default connect(mapStateToProps, { addToCart })(TitleBox);
