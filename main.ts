import { of } from 'rxjs';   
import { map } from 'rxjs/operators';

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
