import { of } from 'rxjs';   
import { map } from 'rxjs/operators';

let streamA  = of(3, 4);
let streamB = streamA.pipe(
  map( x => x * 10)
)

streamB.subscribe(x => console.log(x))