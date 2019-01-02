# Angular Live Search

Using RXJS to create live search component to return results as typed by user.
As the user types the search query is sent to simulated server for matching response. 
If empty query string entered then results are cleared without making simulated HTTP request.

## Explained

### fromEvent 
is an operator which creates an observable that emits a value when an event specified as the second parameter is fired with a target of the event being the first provided argument (here I’m interesed in every input event fired on the input element with id equal to carSearch),

### map 
operator projects an emitted value (input event) to the input’s value, namely the provided query string,

### debounceTime
operator stops further processing until a specified period of time has elapsed since the last user’s input. The purpose of the operator is to prevent making an http call for each key stroke,

### distinctUntilChanged 
operator stops further processing if a current value is the same as a previous one,

### tap 
operator is used here only for debugging purpose, since it allows to track if an emitted value has passed all previous operators,

### switchMap 
operator allows to create a new observable for each value emitted by a source observable. In the above example, for each query string which reaches the switchMap operator the getCars function is called which returns an observable (a stream with a single value, namely cars array matching a given query string).

## Alternatives

### filter 
operator can prevents further processing for an empty query string. Can be used and switchmap update not to return empty array if string query string empty. However this will not clear current results.
