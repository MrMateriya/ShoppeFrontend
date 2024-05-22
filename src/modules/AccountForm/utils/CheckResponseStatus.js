function CheckResponseStatus(res) {
  if (res.name === 'AxiosError') {
    throw Error(res.response?.data.message)
  }
}

export {CheckResponseStatus}