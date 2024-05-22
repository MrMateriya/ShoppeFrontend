import {BackendAxios} from "@/http/BackendAxios";
import {store} from "../../../../lib/store";
import {setUser} from "../../../../lib/features/userSlice";
import {ValidateValueCheckbox} from "@/modules/AccountForm/utils/ValidateValueCheckbox";
import {CheckResponseStatus} from "@/modules/AccountForm/utils/CheckResponseStatus";
async function registration(payload) {
  let {login, email, password, isRemember} = payload

  isRemember = ValidateValueCheckbox(isRemember)

  const res = await BackendAxios.post('/registration', {
    login,
    email,
    password,
    isRemember,
  })
  CheckResponseStatus(res)
  store.dispatch(setUser({
    ...res.data,
    isRemember,
  }))

  return res
}

export {registration}