import { User } from "./User";
//import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

// Initialize and add the map
const user = new User();
const customMap = new CustomMap("map");

customMap.addUserMarker(user);
