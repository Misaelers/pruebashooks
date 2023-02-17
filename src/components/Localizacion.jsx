import { useGeolocation } from "react-use";

const Localizacion = () => {

    const data = useGeolocation();
    console.log(data);

    return (
        <div>
            Geolocation
            {data && (
                <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${data.latitude},${data.longitude}&zoom=18&size=800x800&key=AIzaSyBMOcTcAkobrlfKIBOJNz6lDw2R5fJsk_Q&maptype=hybrid`} alt='Mapa de Google' />
            )}
        </div>
    );

}

export default Localizacion;