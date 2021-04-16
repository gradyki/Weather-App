import Layout from "../../components/Layout/Layout";
import LandingImage from "../../components/LandingImage/LandingImage";
import "./Home.css";
import CurrentReport from "../../components/CurrentReport/CurrentReport";

function Home(props) {
  const { raleigh, newYork, copenhagen } = props;

  return (
    <Layout>
      <div>
        <div>
          <LandingImage />
        </div>
        <main>
          <CurrentReport
            raleigh={raleigh}
            newYork={newYork}
            copenhagen={copenhagen}
          />
        </main>
      </div>
    </Layout>
  );
}

export default Home;
