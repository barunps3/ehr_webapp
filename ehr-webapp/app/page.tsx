import LoginCard from "./components/LoginCard"

export default function Home() {
  return (
    <main className="body">
      <header className="header">
        <div className="company-header dark-blue">
          <div>
            <img className="company-icon" src="/ehr.png" alt="ehr icon" />
          </div>
          <div>
            <h3 className="company-name">Baum Electronic Health Records</h3>
          </div>
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
    </main>
  )
}
