import { useState, useEffect } from "react";
import BookingForm from "../BookingForm/BookingForm";
import ConfirmRes from "../ConfirmRequest/ConfirmRes";
import AppContext from "../../AppContext";
import { fetchAPI } from "../../api/api";
import { Container, Paper, Typography, Box } from "@mui/material";

const Reserve = () => {
  const [confirm, setConfirm] = useState(false);
  const [msg, setMsg] = useState({
    line1: "",
    line2: "",
    line3: "",
  });

  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    const date = new Date();
    const times = fetchAPI(date);
    setAvailableTimes(times);
  }, []);

  const contextValue = { setConfirm, msg, setMsg, availableTimes };

  return (
    <AppContext.Provider value={contextValue}>
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Book Your Table
          </Typography>
          <Box sx={{ mt: 3 }}>
            {!confirm ? <BookingForm /> : <ConfirmRes conf={msg} />}
          </Box>
        </Paper>
      </Container>
    </AppContext.Provider>
  );
};

export default Reserve;
