import CircularProgress from '@mui/joy/CircularProgress';
import Typography from '@mui/joy/Typography';

export function Speedometer({ number, name, max }) {
  // Calculate the percentage value of 'number' relative to 'max'
  const percentageValue = (number / max) * 100;

  // Determine the color based on the percentage value
  let color;
  if (percentageValue > 66) {
    color = "success"; // Top 33%
  } else if (percentageValue <= 66 && percentageValue >= 33) {
    color = "warning"; // Middle 34%
  } else {
    color = "danger"; // Bottom 33%
  }

  return <div>
    <div>
      <CircularProgress
        variant={"solid"}
        color={color} // Apply the dynamically determined color
        style={{ marginLeft: "5%" }}
        sx={{
          "--CircularProgress-size": "150px",
          "--CircularProgress-trackThickness": "15px",
          "--CircularProgress-progressThickness": "15px"
        }}
        determinate
        value={percentageValue}
      >
        <Typography style={{ textAlign: 'center', fontSize: '3rem' }}>{number}</Typography>
      </CircularProgress>
    </div>
    <div style={{ marginLeft: "9%", marginTop: "8%", textAlign: 'center', fontSize: '1.7rem' }}>
      {name}
    </div>
    </div>;
}
