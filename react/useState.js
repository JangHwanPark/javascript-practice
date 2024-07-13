const ReactCurrentDispatcher = {
  current: null
};

function resolveDispatcher() {
  return ReactCurrentDispatcher.current;
}

function useState(initialState) {
  const dispatcher = resolveDispatcher();
  console.log(dispatcher)
  return dispatcher.useState(initialState)
}

useState(23)
