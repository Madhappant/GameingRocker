import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  { label: 'Active Players', value: 2500000, suffix: '+' },
  { label: 'Games Available', value: 1500, suffix: '+' },
  { label: 'Tournaments', value: 250, suffix: '+' },
  { label: 'Countries', value: 85, suffix: '+' },
];

const StatsSection: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography
        variant="h2"
        sx={{
          textAlign: 'center',
          mb: 6,
          background: 'linear-gradient(45deg, #00D4FF, #FF006E)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Global Gaming Stats
      </Typography>
      
      <Grid container spacing={4}>
        {stats.map((stat, index) => (
          <Grid item xs={6} md={3} key={stat.label}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  textAlign: 'center',
                  p: 3,
                  background: 'rgba(26, 26, 46, 0.5)',
                  borderRadius: 2,
                  border: '1px solid rgba(0, 212, 255, 0.3)',
                  '&:hover': {
                    border: '1px solid rgba(0, 212, 255, 0.8)',
                    boxShadow: '0 8px 32px rgba(0, 212, 255, 0.2)',
                    transform: 'translateY(-5px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: '#00D4FF',
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  <CountUp
                    end={stat.value}
                    duration={2}
                    separator=","
                    suffix={stat.suffix}
                  />
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#B0B0B0',
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

// Simple CountUp component since react-countup might not be available
const CountUp: React.FC<{
  end: number;
  duration: number;
  separator?: string;
  suffix?: string;
}> = ({ end, duration, separator = '', suffix = '' }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration]);

  const formatNumber = (num: number) => {
    return separator ? num.toLocaleString() : num.toString();
  };

  return <>{formatNumber(count)}{suffix}</>;
};

export default StatsSection;