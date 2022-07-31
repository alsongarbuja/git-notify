
const Layout = ({ children }: {
    children: JSX.Element,
}) => {
  return (
    <div>
        <nav className="flex justify-between items-center">
            <span className="brand-name">
                GIT - NOTIFY
            </span>
            <div>Profile</div>
        </nav>
        {children}
    </div>
  )
}

export default Layout