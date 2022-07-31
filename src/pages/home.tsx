import { Link } from "react-router-dom"
import { CommentCardDisplay } from "../components/commentCard"
import { IssueCardDisplay } from "../components/issueCard"
import Layout from "../Layout"

const Home = () => {
  return (
    <Layout>
      <main>
        <div className="notification-section">
          <h2>Issues</h2>
          {
            Array(3).fill(0).map((_, index) => (
              <IssueCardDisplay key={index} />
            ))
          }
          <Link to="/" className="see-btn">See all &gt;&gt;</Link>
        </div>
        <div className="notification-section">
          <h2>Comments</h2>
          {
            Array(3).fill(0).map((_, index) => (
              <CommentCardDisplay key={index} />
            ))
          }
          <Link to="/" className="see-btn">See all &gt;&gt;</Link>
        </div>
        {/* <div className="notification-section">
          <h2>Projects</h2>
        </div> */}
      </main>
    </Layout>
  )
}

export default Home