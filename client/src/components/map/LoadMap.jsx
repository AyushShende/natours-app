import {
  useLoadScript,
  GoogleMap,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";
import { Fragment, useMemo } from "react";
import "./LoadMap.css";

const Map = ({ locations }) => {
  const center = useMemo(
    () => ({
      lat: locations[0].coordinates[1],
      lng: locations[0].coordinates[0],
    }),
    [locations]
  );

  return (
    <GoogleMap zoom={7} center={center} mapContainerClassName="map">
      {locations?.map((location) => {
        return (
          <Fragment key={location?._id}>
            <MarkerF
              position={{
                lat: location?.coordinates[1],
                lng: location?.coordinates[0],
              }}
            />
            <InfoWindow
              options={{ pixelOffset: new window.google.maps.Size(0, -25) }}
              position={{
                lat: location?.coordinates[1],
                lng: location?.coordinates[0],
              }}
            >
              <div>
                <p>
                  <span>Day {location?.day}</span>{" "}
                  <span>{location?.description}</span>
                </p>
              </div>
            </InfoWindow>
          </Fragment>
        );
      })}
    </GoogleMap>
  );
};

const LoadMap = ({ locations }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API,
  });
  if (!isLoaded) return <p>Loading</p>;

  return <Map locations={locations} />;
};

export default LoadMap;
