import React from "react";
import { Box } from "@mui/material/";
import axios from "axios";

class Dashboard extends React.Component {
  state = {
    mv: [],
  };

  componentDidMount() {
    axios.get("https://api.publicapis.org/entries").then((res) => {
      this.setState({ mv: res.data.entries });
    });
  }

  render() {
    return (
      <Box mt={2} sx={{ p: 2, border: "1px dashed grey" }}>
        <h2>Fetching API</h2>
        <Box mt={2} sx={{ p: 4 }}>
          <ol>
            {this.state.mv.map((mv_, idx) => (
              <li key={idx}>{mv_.Description}</li>
            ))}
          </ol>
        </Box>
      </Box>
    );
  }
}

export default Dashboard;
