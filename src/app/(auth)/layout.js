import {StoreProvider} from "../../../lib/StoreProvider/StoreProvider";

export default function Layout({children}) {

  return (
    <StoreProvider>
      {children}
    </StoreProvider>
  );
}