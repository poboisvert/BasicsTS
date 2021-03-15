import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

// Initialize and add the map
const user = new User();
const customMap = new CustomMap("map");
const company = new Company();

customMap.addMarker(user); // Link User to CustomMap
customMap.addMarker(company);
