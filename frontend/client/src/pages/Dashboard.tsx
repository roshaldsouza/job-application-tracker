import { Box, Typography, Card, CardContent } from '@mui/material';

interface StatItem {
  label: string;
  value: string;
  change: string;
}

export default function Dashboard() {
  const stats: StatItem[] = [
    { label: 'Total Applications', value: '45', change: '+12%' },
    { label: 'Interviews', value: '8', change: '+3%' },
    { label: 'Rejected', value: '5', change: '-2%' },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Dashboard
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)'
          },
          gap: 3
        }}
      >
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                {stat.label}
              </Typography>
              <Typography variant="h5">{stat.value}</Typography>
              <Typography
                variant="body2"
                color={stat.change.startsWith('+') ? 'success.main' : 'error.main'}
              >
                {stat.change} from last month
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}