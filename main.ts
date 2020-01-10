import { of, from} from 'rxjs';   
import { map,  } from 'rxjs/operators';
import {require} from 'node-fetch';

const axios = require("node-fetch");
// Stream to multiple values. 

// Stream allows you to specify the dynamic behaviour of a value only at the time of declaration.
// If you want to multiple more value you could add them only in stream declaration. 
let multiple = () => {
  let streamA  = of(3, 4, 5);
  let streamB = streamA.pipe(
  map( x => x * 10)
)
  streamB.subscribe(x => console.log(x));

}


let requestStream = of('https://api.github.com/users');
requestStream.subscribe(requestURL => {
  let responseStream = from(fetch(requestURL))
   
  responseStream.subscribe(response => {
    console.log(response)
  })
})

