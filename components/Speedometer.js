import CircularProgress from '@mui/joy/CircularProgress';
import Typography from '@mui/joy/Typography';

export function Speedometer({number, name}) {
    return <div>
      <div>
        <CircularProgress style={{ marginLeft: "5%" }} size={"lg"} determinate value={(number / 158.3) * 100}>
          <Typography>{number}</Typography>
        </CircularProgress>
      </div>
      <div style={{ marginLeft: "9%", marginTop: "2%" }}>
        {name}
      </div>
      </div>;
  }