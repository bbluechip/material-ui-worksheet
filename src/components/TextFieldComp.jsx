import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const TextFieldComp = () => {
  const error = false;

  return (
    <>
      <Container>
        <Typography align="center" mt={4} variant="h4" color="secondary">
          TEXT FIELD
        </Typography>

        <Box sx={{ mt: 4, textAlign: "center" }}>
          <TextField
            margin="dense"
            id="email"
            label="Email"
            placeholder="Enter your email"
            fullWidth
            error={error}
            helperText={error && "Incorrect email address"}
          />

          <TextField
            margin="dense"
            id="password"
            label="Password"
            placeholder="Enter your email"
            fullWidth
            error={error}
            helperText={error && "Incorrect password"}
          />

          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 3, backgroundColor: "secondary.dark" }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default TextFieldComp;
