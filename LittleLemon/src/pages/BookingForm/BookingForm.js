import { useState, useContext } from "react";
import AppContext from "../../AppContext";
import {
  Container,
  Box,
  TextField,
  MenuItem,
  Button,
  Typography
} from "@mui/material";

const validateEmail = email => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const today = new Date();
const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

const year = tomorrow.getFullYear();
const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
const day = String(tomorrow.getDate()).padStart(2, "0");

const nextDayFormatted = `${year}-${month}-${day}`;
const minDate = nextDayFormatted;

const BookingForm = () => {
  const { setConfirm, setMsg, availableTimes } = useContext(AppContext);
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [date, setDate] = useState(minDate);
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("");

  const isGood = () => {
    return name.firstName && name.lastName && validateEmail(name.email) && date && time && guests && occasion;
  };

  const handleName = e => {
    setName({ ...name, [e.target.name]: e.target.value });
  };

  const handleDate = e => {
    setDate(e.target.value);
  };

  const handleTime = e => {
    setTime(e.target.value);
  };

  const handleGuests = e => {
    const num = Number(e.target.value);
    if (num < 1) {
      setGuests(1);
    } else if (num > 20) {
      setGuests(20);
    } else {
      setGuests(num);
    }
  };

  const handleOccasion = e => {
    setOccasion(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setMsg({
      line1: `Dear ${name.firstName} ${name.lastName}:`,
      line2: `Your table for party of ${guests} is reserved for ${date} at ${time}.`,
      line3: `We will see you soon for the ${occasion} event!`,
    });
    setConfirm(true);
  };

  return (
    <Container>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h6">Booking a Table</Typography>
        <TextField
          label="First Name"
          name="firstName"
          value={name.firstName}
          onChange={handleName}
          required
          fullWidth
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={name.lastName}
          onChange={handleName}
          required
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={name.email}
          onChange={handleName}
          required
          fullWidth
        />
        <TextField
          label="Date"
          type="date"
          value={date}
          onChange={handleDate}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            min: minDate,
          }}
          fullWidth
        />
        <TextField
          label="Time"
          select
          value={time}
          onChange={handleTime}
          fullWidth
        >
          <MenuItem value="" disabled>
            Select Time
          </MenuItem>
          {availableTimes.map((time, index) => (
            <MenuItem key={index} value={time}>
              {time}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Guests"
          type="number"
          value={guests}
          onChange={handleGuests}
          inputProps={{ min: 1, max: 20 }}
          fullWidth
        />
        <TextField
          label="Occasion"
          select
          value={occasion}
          onChange={handleOccasion}
          fullWidth
        >
          <MenuItem value="" disabled>
            Select Occasion
          </MenuItem>
          <MenuItem value="birthday">Birthday</MenuItem>
          <MenuItem value="engagement">Engagement</MenuItem>
          <MenuItem value="anniversary">Anniversary</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </TextField>
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: isGood() ? 'black' : 'grey',
            color: isGood() ? 'white' : 'black',
            '&:hover': {
              backgroundColor: isGood() ? 'darkgrey' : 'lightgrey',
            },
          }}
          disabled={!isGood()}
        >
          Confirm Booking
        </Button>
      </Box>
    </Container>
  );
};

export default BookingForm;
