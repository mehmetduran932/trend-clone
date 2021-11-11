import React from "react";
import "../App.css";
import {
  Box,
  Flex,
  Divider,
  Stack,
  Image,
  Button,
  Radio,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import MemoBox from "./MemoBox";
import {product} from "../api/product"
import SmallSrc from "./SmallSrc";

export default function TitleBox() {
  return (
    <div className="title-box">
      <Box>
        <p>
          <a className="title-box-alti-cizili" href="https://www.trendyol.com/">
            Xiaomi
          </a>{" "}
          Redmi Note 10 Pro 8GB + 128GB Gri Cep Telefonu
        </p>
        <p>(Xiaomi Türkiye Garantili)</p>
        <label className="title-box-alti-cizili">Satıcı:</label>
        <a href="https://www.trendyol.com/">Trendyol</a>
        <h3>Buraya Yıldız Değerlendirme Box'ı gelecek</h3>
        <Flex>
          <Box p="2" w="100px" h="100px" bg="white.400">
            <div>
              <p className="ustu-cizili">6.000,00 TL</p>
              <p className="fiyat-renk">4.960 TL</p>
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
      {product[0].memo.map((p) => {
        return (<div className="yasla-hafiza"><MemoBox memo={p} /></div>);
      })}
      <div className="renk-stil">
        <h3>Renk</h3>
      </div>
      <div>
        <SmallSrc/>
      </div>
      <div className="sigorta-box">
        <Flex>
          <Box
            p="2"
            border="solid 2px gray"
            h="150px"
            w="800px"
            bg="gray.50"
            borderRadius="lg"
          >
            <p>Ürününüz için uygun fiyatlara ek hizmet seçebilirsiniz:</p>
            <div>
              <Radio colorScheme="red" value="1">
                <Image
                  w="200px"
                  h="20px"
                  src="https://cdn.dsmcdn.com/ty204/product/inventory/vas/seller-logo-463180-trendyol-sigorta.jpg"
                  alt="sigorta"
                />
              </Radio>
              <Popover>
                <PopoverTrigger>
                  <button className="sigorta-btn">!</button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>trendyolsigorta</PopoverHeader>
                  <PopoverBody>
                    Cihaz Koruma Sigortası aşağıdaki durumlara karşı elektronik
                    cihazınızı güvence altına alan bir sigorta ürünüdür. Cep
                    telefonu ve diğer elektronik eşyalarınızla günlük
                    yaşamınızda karşılaşabileceğiniz aşağıdaki durumlara karşı
                    sigorta ürünü yılda 2 kez onarım veya onarılamayacak
                    durumdaki arızalar içinse 1 kez değişim için devreye
                    girer:Herhangi bir kaza sonucu elektronik cihazın hasar
                    görmesi, ekran kırılması yüksek voltaj, kısa devre gibi
                    elektrik hasarları kaynaklı sorunlar, sıvı teması, cep
                    telefonunuzun hatalı aksesuar kullanımı nedeniyle bozulması,
                    telefonunuzun kapalı bir mekan ya da aracınızdan
                    çalınması.Bu sigorta ürünü Axa Sigorta tarafından Trendyol
                    Sigorta aracılığıyla sunulmaktadır.Proje kapsamındaki tüm
                    hasar, ekspertiz ve onarım yönetimi hizmetleri Axa Sigorta
                    A.Ş. tarafından yetkilendirilmiş asistans şirketi Techpoint
                    Servis ve Destek Hiz. A.Ş. tarafından yapılacaktır.
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <p>Elektronik Cihaz Koruma Sigortası</p>
              <p className="cüzdan-color">573TL</p>
            </div>
          </Box>
        </Flex>
      </div>
      <div className="sepete-ekle yasla-btn">
        <Button colorScheme="orange" size="lg" height="50px" width="550px">
          Sepete Ekle
        </Button>

        <Button className="btn-sağ" height="50px" width="40px">
          Kalp
        </Button>
      </div>
      <div className="txt-margin">
        <p>Tahmini Kargoya Teslim: 6 gün içinde</p>
      </div>
    </div>
  );
}
