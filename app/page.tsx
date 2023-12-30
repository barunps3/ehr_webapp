import HeaderContent from "./components/HeaderContent"
import LoginCard from "./components/LoginCard"
import { PAGENAME } from "./utils/constants"

export default function Login() {
  return (
    <>
      <header className="header">
        <div className="company-header dark-blue">
          <HeaderContent pageName={PAGENAME.LoginPage}/>
        </div>
        <div className="company-header light-blue"></div>
      </header>

      <div className="content">
        <LoginCard />
      </div>

      <footer className="footer">
        <div className="light-blue"></div>
        <div className="dark-blue"></div>
      </footer>
    </>
  )
}
