import Image from "next/image";

const Card = () => {
  return (
    <div id='card'>
      <div id='header'>
        <div id='left-side'>
          <span id='circle'>1</span>
          <div>
            <h3 className="title-wrapper">DAC <span class="heroicons-solid--arrow-right"></span>JFK </h3>
            <p id='info'>Round Trip . 25 Mar - 4 Apr 2023 . 1 Stop</p>
          </div>
        </div>
        <div id='badge'>33h 20m</div>
      </div>

      <div id='card-body'>
        <div id='departure-section'>
          <Image
            src="/assets/icons/location-marker.png"
            alt="emirates logo"
            width={13.5}
            height={18}
          />          <div id='ds-right'>
            <p className="text-1">Departure from Dhaka</p>
            <p className="text-2"><span>Terminal 1:</span> Hazrat Shahjalal International Airport</p>
          </div>
        </div>
        <div className="details">
          <div className="details-left">
            <Image
              src="/assets/icons/emirates.png"
              alt="emirates logo"
              width={18}
              height={22}
            />
            <span className="lb"></span>
            <span className="mage--aeroplane-fill"></span>
            <span className="lb"></span>
            <Image
              src="/assets/icons/location-marker.png"
              alt="emirates logo"
              width={13.5}
              height={18}
            />
          </div>
          <div className="details-right">
            <div className="details-right-inside">
              <div>
                <p className="title">DAC - DXB</p>
                <span>12 hr 20 min</span>
                <p className="airline-title">Turkish Airlines</p>
                <span>Flight no: TUR467</span>
              </div>
              <div>
                <p className="title">07:30PM</p>
                <span>28 Mar, Friday</span>
                <p >Airbus Industries 737-800-738</p>
                <p>Class: <span className="airline-title">ECONOMY-Y(O)</span></p>
              </div>
              <div>
                <p className="title">08:50 AM</p>
                <span>29 Mar, Saturday</span>
              </div>
            </div>
            <div className="alert">
              <span>!</span>
              <p>Technical stoppage at Malpensa International Airport (Milano). Before booking this flight please check your visa requirements as per your nationality</p>
            </div>
            <div id='layover'>
              <p>Layover at Dubai: 12 hr 20 min</p>
              <p>Dubai International Airport</p>
            </div>

          </div>

        </div>

        <div className="details" >
          <div className="details-left">
            <Image
              src="/assets/icons/emirates.png"
              alt="emirates logo"
              width={18}
              height={22}
            />
            <span className="lb"></span>
            <span className="mage--aeroplane-fill"></span>
            <span className="lb"></span>
            <Image
              src="/assets/icons/location-marker-blue.png"
              alt="emirates logo"
              width={13.5}
              height={18}
            />
          </div>
          <div className="details-right">
            <div className="details-right-inside">
              <div>
                <p className="title">DAC - DXB</p>
                <span>12 hr 20 min</span>
                <p className="airline-title">Turkish Airlines</p>
                <span>Flight no: TUR467</span>
              </div>
              <div>
                <p className="title">07:30PM</p>
                <span>28 Mar, Friday</span>
                <p >Airbus Industries 737-800-738</p>
                <p>Class: <span className="airline-title">ECONOMY-Y(O)</span></p>
              </div>
              <div>
                <p className="title">08:50 AM</p>
                <span>29 Mar, Saturday</span>
              </div>
            </div>

            <div id='departure-section'>
              <div id='ds-right'>
                <p className="text-1">Destination at New York</p>
                <p className="text-2"><span>Terminal 4:</span> John F Kennedy International</p>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default Card;