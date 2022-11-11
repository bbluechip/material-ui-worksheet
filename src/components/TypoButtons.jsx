import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const TypoButtons = () => {
  return (
    <>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h6"
          align="center"
          mt={4}
          color="error"
        >
          MUI Typography
        </Typography>

        <Typography
          variant="body2"
          align="justify"
          mt={4}
          color="secondary"
          sx={{ background: "lightgreen", color: "#eee" }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
          placeat, non inventore saepe et sapiente laborum maiores tenetur
          assumenda amet.
        </Typography>

        <Typography
          variant="button"
          sx={{ display: "inline-block", marginTop: "2rem" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          ducimus quos sit id aliquam eum tenetur laborum saepe inventore.
          Dignissimos, tempora quidem aperiam dolor sed adipisci nostrum autem
          corrupti dicta?
        </Typography>
      </Container>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            // width: "50%",
            alignItems: "center",
          }}
        >
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>

          <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" color="secondary" endIcon={<SendIcon />}>
            Send
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default TypoButtons;
