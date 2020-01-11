import { of, from, interval} from 'rxjs';   
import { map, mergeMap} from 'rxjs/operators';
import axios from "axios";

// Promises are simplyfy version of Observable that can thave only one value: resolve or error.
// Observable can have a multiple events.
// from: Promise => Observable 

let requestStream = of('https://api.github.com/users');

let responseStream = requestStream.pipe(
  mergeMap(requestURL => from(axios.get(requestURL)))
)

responseStream.subscribe(response => {
  console.log(response)
})
