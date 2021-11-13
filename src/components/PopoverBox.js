import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
export default function PopoverBox() {
  return (
    <div>
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
            cihazınızı güvence altına alan bir sigorta ürünüdür. Cep telefonu ve
            diğer elektronik eşyalarınızla günlük yaşamınızda
            karşılaşabileceğiniz aşağıdaki durumlara karşı sigorta ürünü yılda 2
            kez onarım veya onarılamayacak durumdaki arızalar içinse 1 kez
            değişim için devreye girer:Herhangi bir kaza sonucu elektronik
            cihazın hasar görmesi, ekran kırılması yüksek voltaj, kısa devre
            gibi elektrik hasarları kaynaklı sorunlar, sıvı teması, cep
            telefonunuzun hatalı aksesuar kullanımı nedeniyle bozulması,
            telefonunuzun kapalı bir mekan ya da aracınızdan çalınması.Bu
            sigorta ürünü Axa Sigorta tarafından Trendyol Sigorta aracılığıyla
            sunulmaktadır.Proje kapsamındaki tüm hasar, ekspertiz ve onarım
            yönetimi hizmetleri Axa Sigorta A.Ş. tarafından yetkilendirilmiş
            asistans şirketi Techpoint Servis ve Destek Hiz. A.Ş. tarafından
            yapılacaktır.
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
}
