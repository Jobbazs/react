import Paragraph from "./components/Paragraph";
import tacsko1 from '../src/images/alondra-pavon-atTzhE48WXI-unsplash.jpg'

function FoxterrierAlkalmazas() {
  return (
    <>
   <Paragraph description="Vizsla leírása" title="Vizsla">
    <div>EZ itt gyerekelem</div>
    
    </Paragraph>
   <Paragraph description="Labrador leírása" title="Labrador">
    
    <img src={tacsko1}/>
    </Paragraph>
   <Paragraph description="Foxterrier leírása" title="Foxterrier"/>
   
   </>
  );
}

export default FoxterrierAlkalmazas;
