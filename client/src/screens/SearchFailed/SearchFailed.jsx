import "./SearchFailed.css";
import Layout from "../../components/Layout/Layout";

export default function SearchFailed() {
  return (
    <div>
      <Layout>
        <div className="alert">
          Location not found. Please try your search again.
        </div>
      </Layout>
    </div>
  );
}
