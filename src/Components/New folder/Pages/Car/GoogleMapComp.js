import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '80vh',
    borderRadius: '10px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};


const GoogleMapComp = () => {
    return (
        <div>
            <LoadScript
                googleMapsApiKey="AIzaSyB3_SyPWFge-nfjjVuaoKKw9JJRKrSFZqw"
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <></>
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default GoogleMapComp