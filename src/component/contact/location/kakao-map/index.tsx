import { Map, MapMarker } from 'react-kakao-maps-sdk';

const KakaoMap = () => {
  const s_lat = 37.55465000468857;
  const s_lng = 126.97059787494679;

  return (
    <Map
      center={{ lat: s_lat, lng: s_lng }}
      className='size-[40rem] bg-primary-main mobile:size-[30rem]'
    >
      <MapMarker position={{ lat: s_lat, lng: s_lng }} />
    </Map>
  );
};

export default KakaoMap;
