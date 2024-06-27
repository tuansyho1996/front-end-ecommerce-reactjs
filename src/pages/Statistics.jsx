import TableRevenuGeneral from "@components/TableRevenuGeneral"
import PagesHeader from "@layouts/PagesHeader"
import { formatNumber } from "@utils/helpers"
import ItemIcon from "@widgets/ItemIcon"
import LinearProgressPercent from "@widgets/LinearProgressPercent"
import { Fragment } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from 'leaflet'



const rows = [
  { year: 2022, customers: 3234, trend: 10, revenue: 124000 },
  { year: 2023, customers: 12345, trend: 35, revenue: 32000 }
]

const data = [
  { label: 'New York', color: 'bg-accent', value: 123000, coords: { lat: 40.730610, lng: -73.935242 } },
  { label: 'Los Angeles', color: 'bg-red', value: 89000, coords: { lat: 34.052235, lng: -118.243683 } },
  { label: 'Houston', color: 'bg-green', value: 67000, coords: { lat: 29.760427, lng: -95.369804 } },
  { label: 'Dallas', color: 'bg-yellow', value: 23000, coords: { lat: 32.776665, lng: -96.796989 } },
  { label: 'Chicago', color: 'bg-white', value: 15000, coords: { lat: 41.878113, lng: -87.629799 } },
  { label: 'Madrid', color: 'bg-white', value: 10000, coords: { lat: 40.416775, lng: -3.703790 } },
]




const Statistics = () => {
  const totalValue = () => {
    return data.reduce((a, b) => a + b.value, 0)
  }
  return (
    <Fragment>
      <PagesHeader title='Statistics' />
      <div className="p-5 flex gap-5 bg-widget">
        <div className="flex flex-col gap-5 font-bold basis-1/5">
          <div className="text-xl">
            General income statistics
          </div>
          <TableRevenuGeneral rows={rows} bg='var(--widget)' />
          <div className="flex gap-3 items-center">
            <ItemIcon icon='diamond' bg='bg-sky-500' px="px-4" py='py-4' />
            <flex className="flex flex-col gap-1 ">
              <div className="text-3xl">{formatNumber(924000, '$')}</div>
              <div>Total income</div>
            </flex>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-xl">
              Income level by city
            </div>
            {
              data.map((item, index) => {
                return (
                  <div className="" key={index}>
                    <div className="flex justify-between">
                      <p>{item.label}</p>
                      <p>{formatNumber(item.value, '$')}</p>
                    </div>
                    <LinearProgressPercent value={item.value / totalValue() * 100} label={item.color} />
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="basis-4/5 rounded-md ">
          <MapContainer className="h-full w-full"
            center={data[0].coords}
            zoom={2}
            minZoom={2}
            maxZoom={4}
            maxBounds={[[-90, -180], [90, 180]]}
            zoomControl={false}
          >
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
            {
              data.map(item => {
                return (
                  <Marker position={item.coords}
                    icon={L.divIcon({
                      className: 'custom-icon',
                      iconAnchor: [10, 10],
                      html: `
                      <div class="w-5 h-5 relative">
                        <span class="block w-5 h-5 animate-ping-slow rounded-full ${item.color}"></span>
                        <span class="dot  rounded-full ${item.color}"></span>
                      </div>
                    `
                    })}
                  >
                    <Popup>
                      <div className="flex gap-3 items-center text-[--text] font-bold">
                        <ItemIcon icon='diamond' bg={item.color} />
                        <div className="flex flex-col gap-1">
                          <div className="text-lg">{item.label}</div>
                          <div>{formatNumber(item.value, '$')}</div>
                        </div>
                      </div>

                    </Popup>
                  </Marker>
                )
              })
            }
            <div className="w-5 h-5"></div>
          </MapContainer>,
        </div>
      </div>
    </Fragment>
  )
}

export default Statistics