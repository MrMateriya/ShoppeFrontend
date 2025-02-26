import AccountMenu from "@/components/AccountMenu/AccountMenu";

export default function Layout({children}) {
  const accountSections = [
    {url: '/account/dashboard', title: 'Dashboard'},
    // {url: '/account/orders', title: 'Orders'},
    // {url: '/account/downloads', title: 'Downloads'},
    // {url: '/account/addresses', title: 'Addresses'},
  ]
  return (
    <main className={'container'} style={{padding: '96px 0'}}>
      <AccountMenu accountSections={accountSections}/>
      {children}
    </main>
  );
}