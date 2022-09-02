import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import '../stylesheets/mapa.css';
import 'leaflet/dist/leaflet.css';
import data from '../data/data.json';
import { useMapEvents } from 'react-leaflet/hooks';
import rabano from '../images/rabano.png';
import magic from '../images/magic-trick.png';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';

const Mapa = () => {
	const position = [22.3128156, -101.6494614];
	console.log(data);

	const LocationFinder = () => {
		const mapeo = useMapEvents({
			click(e) {
				console.log(e.latlng);
				const LatLng = e.latlng;
				return LatLng;
			}
		});
	};

	return (
		<MapContainer center={position} zoom={5} scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			{data.map(data => (
				<Marker
					key={data.id}
					icon={
						new Icon({
							iconUrl: magic,
							iconSize: [25, 41],
							iconAnchor: [12, 41]
						})
					}
					position={[data.gps.lat, data.gps.lng]}>
					<Popup className='popup'>
						<img className='img-pop img-fluid' src={data.image} alt={data.nombre} />
						<h2 className='btn h2-pop'>{data.nombre}</h2>
						<h3 className='btn h3-pop'>{data.nombreCientifico}</h3>
						<p className='p-pop'>{data.description}</p>
						<p className='p-pop'>
							<a className='text-danger a-pop' href={data.url} rel='noopener noreferrer' target='_blank'>
								{data.estado}
							</a>
						</p>
					</Popup>
				</Marker>
			))}
			<LocationFinder />
		</MapContainer>
	);
};

export default Mapa;
