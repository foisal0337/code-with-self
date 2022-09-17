import Data from './data.json';
import MapFunction from './MapFunction';

function map() {
  return (
    <>
        {Data.map(item => <MapFunction tittle={item.tittle} desc={item.desc}  /> ) }
    </>
  )
}

export default map