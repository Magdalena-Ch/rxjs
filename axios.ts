import { of, from} from 'rxjs';   
import { map, flatMap } from 'rxjs/operators';
import axios from "axios";

let requestStream = of('https://api.github.com/users');

let responseStream = requestStream.pipe(
  flatMap(requestURL => from(axios.get(requestURL)))
)

responseStream.subscribe(response => {
  console.log(response)
})