function fib(N) {
  if(N<=1){ return N}
  return (fib(N-2)+fib(N-1))
}

//console.log(fib(7))