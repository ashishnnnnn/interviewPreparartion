# promiseAllSettled .

- Promise.allSettled just waits for all promises to settle, regardless of the result. The resulting array has:

  - {status:"fulfilled", value:result} for successful responses,
  - {status:"rejected", reason:error} for errors.
