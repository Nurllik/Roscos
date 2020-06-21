import axios from "axios";

const launchListUrl = "http://roscosmos.xyz/api/launches/?format=json";
const launchVehicleListUrl = "http://roscosmos.xyz/api/launchvehicles/?format=json";

const getLaunches = () => {
   return axios.get(launchListUrl)
}

const getLaunchVehicle = () => {
    return axios.get(launchVehicleListUrl);
}

export {
    getLaunches,
    getLaunchVehicle
}
